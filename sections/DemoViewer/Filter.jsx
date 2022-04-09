import { useContext } from "react"
import styles from './demoViewer.module.scss'
import ts from '../../styles/global/typography.module.scss'
import ps from '../../styles/global/presets.module.scss'
import { sourceGroups } from "../../configs/appConfig"
import { Context } from "../../context/context"
import { IconFilter, IconRemove, IconPlusOutline, IconRefresh } from "../../components/Icon"
import CollapseAdvanced from "../../components/ui/CollapseAdvanced"
import Input from "../../components/ui/Input"
import Select, { createFilter } from "react-select"
import { customSingleValue, scrollBar, customMultiValue, customOptionAdv, scrollBarAdv } from '../../components/ui/Helpers/UiComponents'
import { filterIt, languages } from "../../utils"
import Radio from "../../components/ui/Radio"
import Button from "../../components/ui/Button"
import { Form } from "react-bootstrap"

const Filter = ({ isDisableTitle }) => {

  const { app, dispatchApp, lang: {
    Filter,
    Timeframe,
    Location,
    Language,
    SourceMedia,
    Category,
    Topic,
    Startingon,
    Endingon,
    Cityname,
    letterstateprovince,
    Allcountries,
    Alllanguages,
    Sourcegroups,
    Allcategories,
    Alltopics,
    d1,
    Include,
    Exclude,
    Addanother,
    Sortby,
    Time,
    Relevance,
    Show,
    ofResults,
    FilterReprints,
    Search,
    Articles,
    Videos,
    Refineresults,
    NoReprints,
    NoPaywalledSources,
    NoNonnews,
    NoOpinions,
    NoPaidNews,
  } } = useContext(Context);

  const addFilter = (filterName, value) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { [filterName]: value } })
  }

  const changeFilter = (filterName, value, i) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { [filterName]: app.selectedFilters[filterName].map((elm, z) => (i == z ? value : elm)) } })
  }

  const onClear = (filterName) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { [filterName]: filterName == "domains" ? [] : '' } })
  }

  const getCountryName = (value) => {
    const search = filterIt(languages, value, "code")
    return value ? search?.length ? search[0].country : null : null
  }

  const onAddDomain = () => {
    if (app.selectedFilters.domain) {
      dispatchApp({ type: 'SET_DEMO_FILTER', data: { domains: [...app.selectedFilters.domains, app.selectedFilters.domain] } })
      dispatchApp({ type: 'SET_DEMO_FILTER', data: { domain: "" } })
    }
  }

  const onRemoveDomain = (i) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { domains: app.selectedFilters.domains.filter((elm, z) => i != z) } })
  }

  const calcFilters = () => {
    const activeFilters = Object.keys(app.selectedFilters).filter((elm) => {
      return (
        elm != "sortBy" &&
        elm != "showResults" &&
        elm != "noReprints" &&
        elm != "includeArticle" &&
        elm != "includeVideo" &&
        !(elm == "domains" && app.selectedFilters.domains.length > 0) &&
        app.selectedFilters[elm] != ''
      ) ? true : false
    })

    if (!app.selectedFilters.includeArticle || !app.selectedFilters.includeVideo) {
      return activeFilters.length + 1
    }

    if (app.selectedFilters.noReprints == false) {
      return activeFilters.length + 1
    }

    return activeFilters.length
  }

  const onSearch = () => {
    dispatchApp({ type: 'SET_APP_VALUES', data: { trigerSearch: true, isActiveFilter: false } })

    setTimeout(() => {
      dispatchApp({ type: 'SET_APP_VALUES', data: { trigerSearch: false } })
    }, 300)
  }

  return (
    <div className={`${styles.filter}`}>
      {!isDisableTitle &&
        <div className={`${styles.sidebarFilter}`}>
          <IconFilter />
          <span className={`${ts.titleSmallD} ${ts.c5}`}>{Filter}</span>
          <div className={`${styles.sidebarFilterCount}`}>{calcFilters()}</div>
        </div>
      }
      <CollapseAdvanced
        className={`mb-2`}
        title={Timeframe}
        style={{ zIndex: 20 }}
        isClearable={app.selectedFilters.startingOn || app.selectedFilters.endingOn}
        onClear={() => {
          onClear("startingOn");
          onClear("endingOn");
        }}
      >
        <Input
          onChange={(e) => addFilter("startingOn", e.target.value)}
          className={`mb-3`}
          placeholder="YYYY-MM-DD"
          name="startingOn"
          variant="flat-adv"
          filter="date"
          value={app.selectedFilters.startingOn}
          label={Startingon}
        />
        <Input
          onChange={(e) => addFilter("endingOn", e.target.value)}
          placeholder="YYYY-MM-DD"
          name="endingOn"
          variant="flat-adv"
          filter="date"
          value={app.selectedFilters.endingOn}
          label={Endingon}
        />
      </CollapseAdvanced>
      <CollapseAdvanced
        className={`mb-2`}
        title={Location}
        style={{ zIndex: 19 }}
        isClearable={app.selectedFilters.country || app.selectedFilters.city || app.selectedFilters.province}
        onClear={() => {
          onClear("country");
          onClear("city");
          onClear("province");
        }}
      >
        <Select
          onChange={e => addFilter("country", e.value)}
          value={app.selectedFilters.country && app.selectedFilters.country != "All countries" ? { label: getCountryName(app.selectedFilters.country), value: app.selectedFilters.country } : null}
          className={`${ps.selectLight} white adv mb-3`}
          classNamePrefix={'acr-select'}
          placeholder={Allcountries}
          options={[{ label: Allcountries, value: Allcountries }, ...languages.map((country) => ({ value: country.code, label: country.country }))]}
          components={{
            SingleValue: customSingleValue,
            MenuList: scrollBar,
          }}
        />
        <Input
          className={`mb-3`}
          placeholder={Cityname}
          name="cityName"
          variant="flat-adv"
          onChange={(e) => addFilter("city", e.target.value)}
          value={app.selectedFilters.city}
        />
        <Input
          placeholder={letterstateprovince}
          name="province"
          variant="flat-adv"
          onChange={(e) => addFilter("province", e.target.value)}
          value={app.selectedFilters.province}
        />
      </CollapseAdvanced>
      <CollapseAdvanced
        className={`mb-2`}
        title={Language}
        style={{ zIndex: 18 }}
        isClearable={app.selectedFilters.language}
        onClear={() => {
          onClear("language");
        }}
      >
        <Select
          onChange={e => addFilter("language", e)}
          className={`${ps.selectLight} white adv multi`}
          classNamePrefix={'acr-select'}
          placeholder={Alllanguages}
          value={app.selectedFilters.language ? app.selectedFilters.language : null}
          isMulti
          maxHeight={350}
          hideSelectedOptions={false}
          options={[...languages.map((elm) => ({ label: `${elm.country} (${elm.lang})`, value: elm.lang }))]}
          components={{
            MultiValue: customMultiValue,
            Option: customOptionAdv,
            MenuList: scrollBar,
          }}
        />
      </CollapseAdvanced>
      <CollapseAdvanced
        className={`mb-2`}
        title={SourceMedia}
        style={{ zIndex: 17 }}
        isClearable={app.selectedFilters.sourceGroups || app.selectedFilters.sourceInclude || app.selectedFilters.domain || (app.selectedFilters.domains?.length ? true : false) || (!app.selectedFilters.includeArticle || !app.selectedFilters.includeVideo)}
        onClear={() => {
          onClear("sourceGroups");
          onClear("sourceInclude");
          onClear("domain");
          onClear("domains");
          addFilter("includeArticle", true)
          addFilter("includeVideo", true)
        }}
      >
        <Select
          onChange={e => {
            addFilter("sourceGroups", e)
            if (e) {
              onClear("sourceInclude");
            }
          }}
          className={`${ps.selectLight} white adv`}
          classNamePrefix={'acr-select'}
          value={app.selectedFilters.sourceGroups ? app.selectedFilters.sourceGroups : null}
          placeholder={Sourcegroups}
          options={sourceGroups}
          components={{
            SingleValue: customSingleValue,
            MenuList: scrollBar,
          }}
        />
        <div className={`mt-3 mb-2`}><span className={`${ts.textMediumM} ${ts.c11}`}>{d1}</span></div>
        <Radio
          value={app.selectedFilters.sourceInclude}
          className={`mb-3`}
          disable={app.selectedFilters.sourceGroups ? [Include] : []}
          onChange={(e) => addFilter("sourceInclude", e)}
          options={[Include, Exclude]}
        />
        {app.selectedFilters.domains?.map((item, i) => (
          <div key={`id-${i}`} className={`${styles.domainInput} mb-3`}>
            <Input
              value={item}
              onChange={(e) => changeFilter("domains", e.target.value, i)}
              placeholder="Domain.com"
              name="domain[]"
              variant="flat-adv"
            />
            <div onClick={() => onRemoveDomain(i)} className={`${styles.domainInputRemove}`}><IconRemove /></div>
          </div>
        ))}
        <div className={`${styles.domainInput} mb-3`}>
          <Input
            onChange={(e) => addFilter("domain", e.target.value)}
            value={app.selectedFilters.domain}
            placeholder="Domain.com"
            name="domainCurrent"
            variant="flat-adv"
          />
        </div>
        <Button onClick={onAddDomain} variant="white" size="stn"><IconPlusOutline /> {Addanother}</Button>
        <div className={`${styles.includeFilter}`}>
          <div><span className={`${ts.titleSmallD} ${ts.c11}`}>{Include}</span></div>
          <div>
            <Form.Check
              className="custom-checkbox-sd"
              value={Articles}
              custom
              checked={app.selectedFilters.includeArticle}
              onChange={e => addFilter("includeArticle", e.target.checked ? true : app.selectedFilters.includeVideo ? false : true)}
              id={Articles}
              label={Articles}
              type="checkbox"
            />
            <Form.Check
              className="custom-checkbox-sd"
              value={Videos}
              custom
              checked={app.selectedFilters.includeVideo}
              onChange={e => addFilter("includeVideo", e.target.checked ? true : app.selectedFilters.includeArticle ? false : true)}
              id={Videos}
              label={Videos}
              type="checkbox"
            />
          </div>
        </div>

      </CollapseAdvanced>
      <CollapseAdvanced
        className={`mb-2`}
        title={Category}
        style={{ zIndex: 16 }}
        isClearable={app.selectedFilters.categories.length > 0}
        onClear={() => {
          onClear("categories");
        }}
      >
        <Select
          onChange={e => addFilter("categories", e)}
          className={`${ps.selectLight} white adv multi`}
          value={app.selectedFilters.categories ? app.selectedFilters.categories : null}
          classNamePrefix={'acr-select'}
          placeholder={Allcategories}
          options={app.categories}
          isMulti
          maxHeight={350}
          hideSelectedOptions={false}
          components={{
            MultiValue: customMultiValue,
            Option: customOptionAdv,
            MenuList: scrollBar,
          }}
        />
      </CollapseAdvanced>
      <CollapseAdvanced
        className={`mb-2`}
        title={Topic}
        style={{ zIndex: 15 }}
        isClearable={app.selectedFilters.topics.length > 0}
        onClear={() => {
          onClear("topics");
        }}
      >
        <Select
          onChange={e => addFilter("topics", e)}
          className={`${ps.selectLight} white adv multi`}
          value={app.selectedFilters.topics ? app.selectedFilters.topics : null}
          classNamePrefix={'acr-select'}
          placeholder={Alltopics}
          filterOption={createFilter({ ignoreAccents: false })}
          options={app.topics}
          isMulti
          maxHeight={350}
          hideSelectedOptions={false}
          components={{
            MultiValue: customMultiValue,
            Option: customOptionAdv,
            MenuList: scrollBarAdv,
          }}
        />
      </CollapseAdvanced>
      <div className={`${ps.blockFilter} mb-2`}>
        <div className="mb-2"><span className={`${ts.titleSmallD} ${ts.c11}`}>{Refineresults}</span></div>
        <Form.Check
          className="custom-checkbox-sd mb-2"
          value={NoReprints}
          custom
          checked={app.selectedFilters.noReprints}
          onChange={e => addFilter("noReprints", e.target.checked)}
          id={NoReprints}
          label={NoReprints}
          type="checkbox"
        />
        <Form.Check
          className="custom-checkbox-sd mb-2"
          value={NoPaywalledSources}
          custom
          checked={app.selectedFilters.noPaywalled}
          onChange={e => addFilter("noPaywalled", e.target.checked)}
          id={NoPaywalledSources}
          label={NoPaywalledSources}
          type="checkbox"
        />
        <Form.Check
          className="custom-checkbox-sd mb-2"
          value={NoNonnews}
          custom
          checked={app.selectedFilters.noNonnews}
          onChange={e => addFilter("noNonnews", e.target.checked)}
          id={NoNonnews}
          label={NoNonnews}
          type="checkbox"
        />
        <Form.Check
          className="custom-checkbox-sd mb-2"
          value={NoOpinions}
          custom
          checked={app.selectedFilters.noOpinions}
          onChange={e => addFilter("noOpinions", e.target.checked)}
          id={NoOpinions}
          label={NoOpinions}
          type="checkbox"
        />
        <Form.Check
          className="custom-checkbox-sd mb-2"
          value={NoPaidNews}
          custom
          checked={app.selectedFilters.noPaidNews}
          onChange={e => addFilter("noPaidNews", e.target.checked)}
          id={NoPaidNews}
          label={NoPaidNews}
          type="checkbox"
        />
      </div>
      <div className={`${ps.blockFilter}`}>
        <div className="mb-2"><span className={`${ts.titleSmallD} ${ts.c11}`}>{Sortby}</span></div>
        <Radio
          value={app.selectedFilters.sortBy}
          className={`mb-3`}
          onChange={e => addFilter("sortBy", e)}
          options={[Time, Relevance]}
        />
        <div className="mb-2"><span className={`${ts.titleSmallD} ${ts.c11}`}>{Show}</span></div>
        <Form.Check
          className="custom-checkbox-sd mb-2"
          value={ofResults}
          custom
          checked={app.selectedFilters.showResults}
          onChange={e => addFilter("showResults", e.target.checked)}
          id={ofResults}
          label={ofResults}
          type="checkbox"
        />
      </div>
      <div className={`${styles.sidebarSearch} ${calcFilters() > 0 ? "active" : ""}`}>
        <Button
          onClick={onSearch}
          size="spc"
          className="w-100 justify-content-center mt-2"
          variant="primary-shadow"
          disabled={app.isButtonDisabled}
        >
          {Search} <IconRefresh className={`${ps.ml05} ${app.isAnimLoading ? "anim-rotate" : ""}`} />
        </Button>
      </div>
    </div>
  );
}

export default Filter;
