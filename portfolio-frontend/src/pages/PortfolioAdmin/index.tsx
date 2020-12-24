import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import {
  ContactIndex,
  EditPortfolio,
  Footer,
  FormOpinion,
  Loading,
  Toggle,
} from "../../components";

import { getJWT } from "../../helpers/jwt";

import api from "../../services/api";

import "./styles.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    backgroundColor: "lightgray",
    color: "black",
  },
}));

export default function PortfolioAdmin(props) {
  const [user, setUser] = useState(undefined);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const jwt = getJWT();
    if (!jwt) props.history.push("/login");

    (async () => {
      await api
        .get("/me", { headers: { authorization: `Bearer ${jwt}` } })
        .then((res) => setUser(res.data.user))
        .catch((err) => {
          localStorage.removeItem("currentUser");
          props.history.push("/login");
        });
    })();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Toggle />
      {user ? (
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              indicatorColor="primary"
              centered
              className={classes.tab}
              variant="scrollable"
              scrollButtons="on"
            >
              <Tab label="Editar o Portfólio" {...a11yProps(0)} />
              <Tab label="Mensagem dos clientes" {...a11yProps(1)} />
              <Tab label="Inserir Depoimentos" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <EditPortfolio />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="tab">
              <ContactIndex />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="tab">
              <FormOpinion />
            </div>
          </TabPanel>
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}
