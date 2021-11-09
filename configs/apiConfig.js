import moment from "moment";

const now = moment.utc();
const today = now.format("YYYY-MM-DD");
const yestarday = now.subtract(1, "day").format("YYYY-MM-DD");

const api = {
  api: "https://app.perigon.com",
  contact: "#",
  tagsRequests: [
    {api:`/tags/trending?cat=person&startTime=${yestarday}T00:00:00&endTime=${today}T23:59:59&_limit=6`, name: "People", icon: "people"},
    {api:`/tags/trending?cat=org&subcat=business&startTime=${yestarday}T00:00:00&endTime=${today}T23:59:59&_limit=6`, name: "Orgs", icon: "orgs"},
    {api:`/tags/trending?cat=time&subcat=event&startTime=${yestarday}T00:00:00&endTime=${today}T23:59:59&_limit=6`, name: "Events", icon: "events"},
    {api:`/tags/trending?cat=broad&startTime=${yestarday}T00:00:00&endTime=${today}T23:59:59&_limit=6`, name: "Topics", icon: "topics"},
  ],
}

export default api;