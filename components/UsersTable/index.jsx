import React, {useState, useEffect} from "react";
import {useDebounce} from "use-debounce";
import InternalUsersService from "../../services/InternalUsersService";
import SimpleTable from "../SimpleTable";
import Toolbar from "./Toolbar";

const UsersTable = (props) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [emailSearch, setEmailSearch] = useState("");
  const [debouncedEmailSearch] = useDebounce(emailSearch, 250);

  const [nameSearch, setNameSearch] = useState("");
  const [debouncedNameSearch] = useDebounce(nameSearch, 250);

  useEffect(() => {
    InternalUsersService
      .getAllUsers({
        email: debouncedEmailSearch,
        name: debouncedNameSearch,
        page,
        size: rowsPerPage
      })
      .then(({ count, results }) => {
        const data = results.map(({billingPlan, subscription, paymentMethod, tracking, ...rest}) => ({
          ...rest,
          billingPlanName: billingPlan?.name,
          monthlyPrice: billingPlan?.monthlyPrice,
          yearlyPrice: billingPlan?.yearlyPrice,
          requestLimit: billingPlan?.requestLimit,
          subscriptionStatus: subscription?.stripeSubscriptionStatus ?? "not subscribed",
          trialExpiresAt: subscription?.trialExpiresAt,
          nextPaymentAt: subscription?.nextPaymentAt,
          numRequests: tracking?.numRequests ?? 0,
          since: tracking?.since,
          verified: `${rest.verified}`
        }))
        setResults(data);
        setCount(count);
        setIsLoading(false);
      })
  }, [debouncedEmailSearch, debouncedNameSearch, page, rowsPerPage])

  const attributes = [
    {text: "Id", value: "id"},
    {text: "Email", value: "email"},
    {text: "First name", value: "firstName"},
    {text: "Last name", value: "lastName"},
    {text: "API key", value: "apiKey"},
    {text: "Usage", value: "usage"},
    {text: "Business name", value: "businessName"},
    {text: "Verified?", value: "verified"},
    {text: "Billing mode", value: "billingMode"},
    {text: "Billing plan", value: "billingPlanName"},
    {text: "Monthly price", value: "monthlyPrice"},
    {text: "Yearly price", value: "yearlyPrice"},
    {text: "Request limit", value: "requestLimit"},
    {text: "Subscription status", value: "subscriptionStatus"},
    {text: "Requests made", value: "numRequests"},
    {text: "Requests made since", value: "since"},
  ];

  return (
    <>
      <Toolbar
        setNameSearch={setNameSearch}
        setEmailSearch={setEmailSearch}
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

export default UsersTable;
