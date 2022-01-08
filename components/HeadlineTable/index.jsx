import React, {useState, useEffect} from "react";
import {useDebounce} from "use-debounce";
import MappingService from "../../services/MappingService";
import SimpleTable from "../SimpleTable";
import Toolbar from "./Toolbar";

const HeadlineTable = (props) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [headlineSearch, setHeadlineSearch] = useState("");
  const [debouncedHeadlineSearch] = useDebounce(headlineSearch, 250);

  const [categorySearch, setCategorySearch] = useState("");
  const [debouncedCategorySearch] = useDebounce(categorySearch, 250);

  const [topicSearch, setTopicSearch] = useState("");
  const [debouncedTopicSearch] = useDebounce(topicSearch, 250);

  const [mediumSearch, setMediumSearch] = useState("");
  const [debouncedMediumSearch] = useDebounce(mediumSearch, 250);

  useEffect(() => {
    MappingService
      .findHeadlineMappings({
        page,
        size: rowsPerPage,
        headline: debouncedHeadlineSearch,
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
    debouncedHeadlineSearch,
    debouncedCategorySearch,
    debouncedTopicSearch,
    debouncedMediumSearch
  ])

  const attributes = [
    {text: "Id", value: "id"},
    {text: "Headline", value: "headline"},
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
        setHeadlineSearch={setHeadlineSearch}
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
  );
}

export default HeadlineTable;
