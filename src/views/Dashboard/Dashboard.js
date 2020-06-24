import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { Dropdown, DropdownButton } from 'react-bootstrap';


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  emailsSubscriptionChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardBody>
              <h4 className={classes.cardTitle}>Novos Usuários</h4>
            </CardBody>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>

            <CardFooter chart>
              <div className={classes.stats}>
                {/* <AccessTime /> campaign sent 2 days ago */}
              </div>
            </CardFooter>
          </Card>

        </GridItem>
      </GridContainer>
    </div>
  );
}
