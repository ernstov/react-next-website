import { useEffect, useState, useContext, useMemo } from "react"
import styles from './demoViewer.module.scss'
import ts from '../../styles/global/typography.module.scss'
import ps from '../../styles/global/presets.module.scss'
import { sourceGroups } from "../../configs/appConfig"
import { Context } from "../../context/context"
import { IconFilter, IconRemove, IconPlusOutline } from "../../components/Icon"
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
    FilterReprints
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
    return Object.keys(app.selectedFilters).filter((elm) => {
      return (
        elm != "sortBy" &&
        elm != "showResults" &&
        elm != "showFilter" &&
        !(elm == "domains" && app.selectedFilters.domains.length > 0) &&
        app.selectedFilters[elm] != ''
      ) ? true : false
    }).length
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
          options={[{ label: Allcountries, value: Allcountries }, ...languages.map((country)=>({value: country.code, label: country.country}))]}
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
          options={[...languages.map((elm) => ({ label: `${elm.country} (${elm.code})`, value: elm.code }))]}
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
        isClearable={app.selectedFilters.sourceGroups || app.selectedFilters.sourceInclude || app.selectedFilters.domain || (app.selectedFilters.domains?.length ? true : false)}
        onClear={() => {
          onClear("sourceGroups");
          onClear("sourceInclude");
          onClear("domain");
          onClear("domains");
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
      </CollapseAdvanced>
      <CollapseAdvanced
        className={`mb-2`}
        title={Category}
        style={{ zIndex: 16 }}
        isClearable={app.selectedFilters.categories}
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
        isClearable={app.selectedFilters.topics}
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
        <Form.Check
          className="custom-checkbox-sd"
          value={FilterReprints}
          custom
          checked={app.selectedFilters.showFilter}
          onChange={e => addFilter("showFilter", e.target.checked)}
          id={FilterReprints}
          label={FilterReprints}
          type="checkbox"
        />
      </div>
    </div>
  );
}

export default Filter;
