import React, {useState} from "react";
import RoutesMap from "../routesMap/routesMap";
import Loading from "../loading/loading";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from '@material-ui/core/styles';
import {routePurpose, routeTypes, routeWeatherTypeEnum} from "../../utils/constants";
import _ from "lodash";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const defaultValues = {
    id: "",
    type: "",
    weatherType: "",
    purpose: "",
    isDuringDay: "",

};

const Routes = (props) => {
    const {fetchingRoutes, uploadedRoutes, classes, fetchUploadedRoutes} = props;
    const [values, setValues] = useState(defaultValues);
    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    };

    const onFilter = () => {
        const whereFilter = [];

        if(values.id){
            whereFilter.push({id: values.id});
        }

        if(values.type){
            whereFilter.push({typeCode: values.type});
        }

        if(values.weatherType){
            whereFilter.push({weatherTypeCode: values.weatherType});
        }

        if(values.purpose){
            whereFilter.push({purposeCode: values.purpose});
        }

        if(values.isDuringDay){
            whereFilter.push({ isDuringDay: values.isDuringDay === "yes"});
        }

        let filter = {
            include: "points"
        };

        if(whereFilter.length > 0){
            filter = {...filter, where: {and: whereFilter}}
        }
        fetchUploadedRoutes({
            filter: filter
        });
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="routeId">Route Id</InputLabel>
                <Input id="routeId" value={values.id} onChange={handleChange} type={"number"} name={"id"}/>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="type-simple">Type</InputLabel>
                <Select
                    value={values.type}
                    onChange={handleChange}
                    inputProps={{
                        name: 'type',
                        id: 'type-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        _.map(routeTypes, type => (
                            <MenuItem value={type.code} key={type.code}>{type.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="weather-type-simple">Weather Type</InputLabel>
                <Select
                    value={values.weatherType}
                    onChange={handleChange}
                    inputProps={{
                        name: 'weatherType',
                        id: 'weather-type-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        _.map(routeWeatherTypeEnum, type => (
                            <MenuItem value={type.code} key={type.code}>{type.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="purpose-type-simple">Purpose</InputLabel>
                <Select
                    value={values.purpose}
                    onChange={handleChange}
                    inputProps={{
                        name: 'purpose',
                        id: 'purpose-type-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        _.map(routePurpose, type => (
                            <MenuItem value={type.code} key={type.code}>{type.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="is-during-type-simple">Is during day</InputLabel>
                <Select
                    value={values.isDuringDay}
                    onChange={handleChange}
                    inputProps={{
                        name: 'isDuringDay',
                        id: 'is-during-day-type-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"yes"}>Yes</MenuItem>
                    <MenuItem value={"no"}>No</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" className={classes.button} onClick={onFilter}>
                Filter
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => setValues(defaultValues)}>
                Clear
            </Button>
            <Loading displayLoader={fetchingRoutes}/>
            <RoutesMap
                routes={uploadedRoutes}
            />
        </div>
    )
};

export default  withStyles(styles)(Routes);