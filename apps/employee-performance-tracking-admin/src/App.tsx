import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KpiList } from "./kpi/KpiList";
import { KpiCreate } from "./kpi/KpiCreate";
import { KpiEdit } from "./kpi/KpiEdit";
import { KpiShow } from "./kpi/KpiShow";
import { GoalList } from "./goal/GoalList";
import { GoalCreate } from "./goal/GoalCreate";
import { GoalEdit } from "./goal/GoalEdit";
import { GoalShow } from "./goal/GoalShow";
import { FeedbackNoteList } from "./feedbackNote/FeedbackNoteList";
import { FeedbackNoteCreate } from "./feedbackNote/FeedbackNoteCreate";
import { FeedbackNoteEdit } from "./feedbackNote/FeedbackNoteEdit";
import { FeedbackNoteShow } from "./feedbackNote/FeedbackNoteShow";
import { EmployeeProfileList } from "./employeeProfile/EmployeeProfileList";
import { EmployeeProfileCreate } from "./employeeProfile/EmployeeProfileCreate";
import { EmployeeProfileEdit } from "./employeeProfile/EmployeeProfileEdit";
import { EmployeeProfileShow } from "./employeeProfile/EmployeeProfileShow";
import { PerformanceReviewList } from "./performanceReview/PerformanceReviewList";
import { PerformanceReviewCreate } from "./performanceReview/PerformanceReviewCreate";
import { PerformanceReviewEdit } from "./performanceReview/PerformanceReviewEdit";
import { PerformanceReviewShow } from "./performanceReview/PerformanceReviewShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Employee Performance Tracking"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Kpi"
          list={KpiList}
          edit={KpiEdit}
          create={KpiCreate}
          show={KpiShow}
        />
        <Resource
          name="Goal"
          list={GoalList}
          edit={GoalEdit}
          create={GoalCreate}
          show={GoalShow}
        />
        <Resource
          name="FeedbackNote"
          list={FeedbackNoteList}
          edit={FeedbackNoteEdit}
          create={FeedbackNoteCreate}
          show={FeedbackNoteShow}
        />
        <Resource
          name="EmployeeProfile"
          list={EmployeeProfileList}
          edit={EmployeeProfileEdit}
          create={EmployeeProfileCreate}
          show={EmployeeProfileShow}
        />
        <Resource
          name="PerformanceReview"
          list={PerformanceReviewList}
          edit={PerformanceReviewEdit}
          create={PerformanceReviewCreate}
          show={PerformanceReviewShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
