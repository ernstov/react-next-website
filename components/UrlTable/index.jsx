import React, {useState, useEffect} from "react";
import {useDebounce} from "use-debounce";
import SimpleTable from "../SimpleTable";
import MappingService from "../../services/MappingService";
import Toolbar from "./Toolbar"

const UrlTable = (props) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [domainSearch, setDomainSearch] = useState("");
  const [debouncedDomainSearch] = useDebounce(domainSearch, 250);

  const [conditionSearch, setConditionSearch] = useState("");
  const [debouncedConditionSearch] = useDebounce(conditionSearch, 250);

  const [categorySearch, setCategorySearch] = useState("");
  const [debouncedCategorySearch] = useDebounce(categorySearch, 250);

  const [topicSearch, setTopicSearch] = useState("");
  const [debouncedTopicSearch] = useDebounce(topicSearch, 250);

  const [mediumSearch, setMediumSearch] = useState("");
  const [debouncedMediumSearch] = useDebounce(mediumSearch, 250);

  useEffect(() => {
    MappingService
      .findUrlMappings({
        page,
        size: rowsPerPage,
        domain: debouncedDomainSearch,
        condition: debouncedConditionSearch,
        category: debouncedCategorySearch,
        topic: debouncedTopicSearch,
        medium: debouncedMediumSearch,
      })
      .then(({ results, count }) => {
        setResults(results);
        setCount(count);
        setIsLoading(false);
      })
  }, [
    page,
    rowsPerPage,
    debouncedDomainSearch,
    debouncedConditionSearch,
    debouncedCategorySearch,
    debouncedTopicSearch,
    debouncedMediumSearch
  ])

  const attributes = [
    {text: "Id", value: "id"},
    {text: "Source ID", value: "sourceId"},
    {text: "Domain", value: "domain"},
    {text: "Url Condition", value: "condition"},
    {text: "Category", value: "category"},
    {text: "Topic", value: "topic"},
    {text: "Label", value: "label"},
    {text: "Medium", value: "medium"},
    {text: "Area", value: "area"},
    {text: "City", value: "city"},
    {text: "State", value: "state"},
  ];

  return (
    <>
      <Toolbar
        setDomainSearch={setDomainSearch}
        setConditionSearch={setConditionSearch}
        setCategorySearch={setCategorySearch}
        setTopicSearch={setTopicSearch}
        setMediumSearch={setMediumSearch}
        className="mb-4 mt-4"
      />
      <SimpleTable
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        count={count}
        results={results}
        isLoading={isLoading}
        attributes={attributes}
      />
    </>
  )
}

export default UrlTable;
