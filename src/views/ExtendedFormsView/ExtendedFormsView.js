import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Card, CardHeader, CardContent, Avatar,
    Typography,
} from '@material-ui/core';

import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    KeyboardDatePicker,
    KeyboardTimePicker,
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
    AccessibilityNewSharp as AccessibilityNewSharpIcon,
    CalendarToday as DatePickerIcon,
    AvTimer as TimerPickerIcon,
    DateRange as DateTimePickerIcon
} from '@material-ui/icons';
import format from "date-fns/format";
import frLocale from "date-fns/locale/fr";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    cardroot: {
        minHeight: 100,
        margin: theme.spacing(2)
    },
    formroot: {
        '& > *': {
            marginBottom: theme.spacing(3),
        }
    },
    horizontalItem: {
        paddingTop: theme.spacing(2),
    },
    horizontalItemLabel: {
        paddingTop: theme.spacing(3),
        textAlign: "right",
        paddingRight: theme.spacing(3)
    }
}));

class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
        return format(date, "d MMM yyyy", { locale: this.locale });
    }
}

const ExtendedFormsView = () => {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Grid container className={classes.root}>
            <Grid item md={4} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title={
                        <Typography variant="h4">Date Picker</Typography>
                    }
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <DatePickerIcon />
                            </Avatar>
                        } />
                    <CardContent>
                        <MuiPickersUtilsProvider utils={LocalizedUtils} locale={frLocale}>
                            <DatePicker
                                clearable
                                format="d MMM yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                clearLabel="vider"
                                cancelLabel="annuler"
                            />
                        </MuiPickersUtilsProvider>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title={
                        <Typography variant="h4">Time Picker</Typography>
                    }
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <TimerPickerIcon />
                            </Avatar>
                        } />
                    <CardContent>
                        <MuiPickersUtilsProvider utils={LocalizedUtils} locale={frLocale}>
                            <TimePicker
                                clearable
                                ampm={false}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} sm={12}>
                <Card className={classes.cardroot}>
                    <CardHeader title={
                        <Typography variant="h4">DateTime Picker</Typography>
                    }
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <DateTimePickerIcon />
                            </Avatar>
                        } />
                    <CardContent>
                        <MuiPickersUtilsProvider utils={LocalizedUtils} locale={frLocale}>
                            <DateTimePicker
                                autoOk
                                hideTabs
                                ampm={false}
                                format="d MMM yyyy HH:mm"
                                value={selectedDate}
                                onChange={handleDateChange}
                                allowKeyboardControl={false}
                                leftArrowButtonProps={{ "aria-label": "Prev month" }}
                                rightArrowButtonProps={{ "aria-label": "Next month" }}
                            />                       
                        </MuiPickersUtilsProvider>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ExtendedFormsView;