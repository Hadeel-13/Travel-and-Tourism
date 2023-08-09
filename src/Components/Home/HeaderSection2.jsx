import "./HeaderSection2.css";
import onePerson from "../../assets/images/icons/1Person.png";
import twoPerson from "../../assets/images/icons/2Person.png";
import threePerson from "../../assets/images/icons/3Person.png";
//
import { useState } from "react";
import { East } from "@mui/icons-material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import dayjs from "dayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import {
    Box,
    Button,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import { Button6, ButtonWithPopup } from "../ButtonCustom";
import { ComponentSection1, ComponentSection2 } from "./PersonPopupSections";

export default function HeaderSection2() {
    const EUROPEList = [
        "Acland",
        "Paris",
        "Italy",
        "London",
        "Island",
        "Troms",
        "USA",
        "Tabita",
        "Berlin",
        "Reykjavik",
        "Salzburg",
        "Malmo",
    ];
    const UNITEDList = [
        "Atlantes",
        "Charlotte",
        "Memphis",
        "Austin",
        "Denver",
        "Miami",
        "Boston",
        "Detroit",
        "New York",
        "Baltimore",
        "Kansas",
        "Oakland",
        "Chicago",
        "Las Vegas",
        "Omaha",
        "Cinematic",
        "Phoenix",
        "Houston",
    ];
    const ASIAList = ["Dubai", "Seoul", "Mumba", "Osaka"];
    //Destination
    const [destinationValue, setDestinationValue] = useState("Choose");
    const [anchorElDestination, setAnchorElDestination] = useState(null);
    const handleClickDestination = (event) => {
        setAnchorElDestination(event.currentTarget);
    };
    const handleCloseDestination = () => {
        setAnchorElDestination(null);
    };
    //Person
    const [personValue, setPersonValue] = useState(2);
    const [anchorElPerson, setAnchorElPerson] = useState(null);
    const handleClickPerson = (event) => {
        setAnchorElPerson(event.currentTarget);
    };
    const handleClosePerson = () => {
        setAnchorElPerson(null);
    };
    const [adultsValue, setAdultsValue] = useState(0);
    const [childValue, setChildValue] = useState(2);
    const [infantValue, setInfantValue] = useState(0);
    //Depart
    const [value, setValue] = useState([dayjs(new Date()), dayjs(new Date())]);
    const [departReturnValue, setDepartReturnValue] = useState([
        dayjs(new Date()),
        dayjs(new Date()),
    ]);
    const [anchorElDepart, setAnchorElDepart] = useState(null);
    const handleClickDepartReturn = (event) => {
        setAnchorElDepart(event.currentTarget);
    };
    const handleCloseDepartReturn = () => {
        setAnchorElDepart(null);
        setDepartReturnValue(value);
    };

    return (
        <>
            <Container maxWidth={"xl"}>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    sx={{
                        flexDirection: { xs: "column", lg: "row" },
                    }}
                >
                    <Box
                        sx={{
                            py: 5,
                            px: { xs: "35px", lg: "115px" },
                            bgcolor: "white",
                            borderTopLeftRadius: "35px",
                        }}
                    >
                        <Stack
                            columnGap={7}
                            rowGap={3}
                            flexWrap={"wrap"}
                            direction={"row"}
                            sx={{
                                justifyContent: { xs: "center", sm: "start" },
                            }}
                        >
                            <ButtonWithPopup
                                value={destinationValue}
                                lebel="Destination"
                                id="destination-popover"
                                anchorEl={anchorElDestination}
                                handleClick={handleClickDestination}
                                handleClose={handleCloseDestination}
                            >
                                <Box sx={{ flexGrow: 1 }}>
                                    <Stack
                                        direction={"row"}
                                        columnGap={7}
                                        flexWrap={"wrap"}
                                        sx={{
                                            flexGrow: 1,
                                            columnGap: { sm: 1, lg: 7 },
                                        }}
                                    >
                                        <Typography component={"div"}>
                                            <Typography
                                                sx={{
                                                    color: "myGray500.main",
                                                    fontWeight: 400,
                                                    
                                                    mb: 1,
                                                    ml: 1,
                                                }}
                                            >
                                                EUROPE
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    display: "grid",
                                                    gridTemplateColumns: {
                                                        xs: "repeat(1, minmax(0, 1fr))",
                                                        sm: "repeat(2, minmax(0, 1fr))",
                                                    },
                                                    rowGap: 1,
                                                    columnGap: 2,
                                                }}
                                            >
                                                <Button6
                                                    list={EUROPEList}
                                                    setValue={
                                                        setDestinationValue
                                                    }
                                                />
                                            </Typography>
                                        </Typography>
                                        <Divider
                                            orientation="vertical"
                                            sx={{
                                                bgcolor: "#fff",
                                                my: 7,
                                                visibility: {
                                                    xs: "hidden",
                                                    sm: "visible",
                                                },
                                            }}
                                            flexItem
                                        />
                                        <Typography component={"div"}>
                                            <Typography
                                                sx={{
                                                    color: "myGray500.main",
                                                    fontWeight: 400,
                                                    
                                                    mb: 1,
                                                    ml: 1,
                                                }}
                                            >
                                                UNITED STATES
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    display: "grid",
                                                    gridTemplateColumns: {
                                                        xs: "repeat(1, minmax(0, 1fr))",
                                                        sm: "repeat(2, minmax(0, 1fr))",
                                                        md: "repeat(3, minmax(0, 1fr))",
                                                    },
                                                    rowGap: 1,
                                                    columnGap: 2,
                                                }}
                                            >
                                                <Button6
                                                    list={UNITEDList}
                                                    setValue={
                                                        setDestinationValue
                                                    }
                                                />
                                            </Typography>
                                        </Typography>
                                        <Divider
                                            orientation="vertical"
                                            sx={{
                                                bgcolor: "#fff",
                                                my: 7,
                                                visibility: {
                                                    xs: "hidden",
                                                    sm: "visible",
                                                },
                                            }}
                                            flexItem
                                        />
                                        <Typography component={"div"}>
                                            <Typography
                                                sx={{
                                                    color: "myGray500.main",
                                                    fontWeight: 400,
                                                    
                                                    mb: 1,
                                                    ml: 1,
                                                }}
                                            >
                                                ASIA
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    display: "grid",
                                                    gridTemplateColumns:
                                                        "repeat(1, minmax(0, 1fr))",
                                                    rowGap: 1,
                                                }}
                                            >
                                                <Button6
                                                    list={ASIAList}
                                                    setValue={
                                                        setDestinationValue
                                                    }
                                                />
                                            </Typography>
                                        </Typography>
                                    </Stack>
                                </Box>
                            </ButtonWithPopup>
                            <ButtonWithPopup
                                value={personValue}
                                lebel="Person"
                                id="person-popover"
                                anchorEl={anchorElPerson}
                                handleClick={handleClickPerson}
                                handleClose={handleClosePerson}
                            >
                                <Box>
                                    <Stack
                                        direction={"row"}
                                        columnGap={13}
                                        sx={{
                                            columnGap: { xs: 5, md: 13 },
                                        }}
                                    >
                                        <Stack direction={"column"} rowGap={2}>
                                            <ComponentSection1
                                                image={onePerson}
                                                title="Adult"
                                                subTitle="over 11"
                                                imgWidth={8}
                                                mlSubtitle={2}
                                            />
                                            <ComponentSection1
                                                image={twoPerson}
                                                title="Child"
                                                subTitle="2 - 11"
                                                imgWidth={18}
                                                mlSubtitle={4}
                                            />
                                            <ComponentSection1
                                                image={threePerson}
                                                title="Infant"
                                                subTitle="0 - 2"
                                                imgWidth={21}
                                                mlSubtitle={4}
                                            />
                                        </Stack>
                                        <Stack direction={"column"} rowGap={4}>
                                            <ComponentSection2
                                                value={adultsValue}
                                                OnRemove={() => {
                                                    if (adultsValue <= 0)
                                                        return;
                                                    else {
                                                        setAdultsValue(
                                                            adultsValue - 1
                                                        );
                                                        setPersonValue(
                                                            personValue - 1
                                                        );
                                                    }
                                                }}
                                                OnAdd={() => {
                                                    if (adultsValue >= 11)
                                                        return;
                                                    else {
                                                        setAdultsValue(
                                                            adultsValue + 1
                                                        );
                                                        setPersonValue(
                                                            personValue + 1
                                                        );
                                                    }
                                                }}
                                            />
                                            <ComponentSection2
                                                value={childValue}
                                                OnRemove={() => {
                                                    if (childValue <= 2) return;
                                                    else {
                                                        setChildValue(
                                                            childValue - 1
                                                        );
                                                        setPersonValue(
                                                            personValue - 1
                                                        );
                                                    }
                                                }}
                                                OnAdd={() => {
                                                    if (childValue >= 11)
                                                        return;
                                                    else {
                                                        setChildValue(
                                                            childValue + 1
                                                        );
                                                        setPersonValue(
                                                            personValue + 1
                                                        );
                                                    }
                                                }}
                                            />
                                            <ComponentSection2
                                                value={infantValue}
                                                OnRemove={() => {
                                                    if (infantValue <= 0)
                                                        return;
                                                    else {
                                                        setInfantValue(
                                                            infantValue - 1
                                                        );
                                                        setPersonValue(
                                                            personValue - 1
                                                        );
                                                    }
                                                }}
                                                OnAdd={() => {
                                                    if (infantValue >= 2)
                                                        return;
                                                    else {
                                                        setInfantValue(
                                                            infantValue + 1
                                                        );
                                                        setPersonValue(
                                                            personValue + 1
                                                        );
                                                    }
                                                }}
                                            />
                                        </Stack>
                                    </Stack>
                                </Box>
                            </ButtonWithPopup>
                            <ButtonWithPopup
                                value={departReturnValue[0].format(
                                    "DD/MM/YYYY"
                                )}
                                lebel="Depart"
                                id="depart-popover"
                                anchorEl={anchorElDepart}
                                handleClick={handleClickDepartReturn}
                                handleClose={handleCloseDepartReturn}
                            >
                                <Box>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DemoContainer
                                            components={[
                                                "DateRangeCalendar",
                                                "DateRangeCalendar",
                                            ]}
                                        >
                                            <DemoItem label="Calendar">
                                                <DateRangeCalendar
                                                    value={value}
                                                    onChange={(newValue) =>
                                                        setValue(newValue)
                                                    }
                                                />
                                            </DemoItem>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Box>
                            </ButtonWithPopup>
                            <ButtonWithPopup
                                value={departReturnValue[1].format(
                                    "DD/MM/YYYY"
                                )}
                                lebel="Return"
                                id="depart-popover"
                                anchorEl={anchorElDepart}
                                handleClick={handleClickDepartReturn}
                                handleClose={handleCloseDepartReturn}
                            >
                                <Box>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DemoContainer
                                            components={[
                                                "DateRangeCalendar",
                                                "DateRangeCalendar",
                                            ]}
                                        >
                                            <DemoItem label="Calendar">
                                                <DateRangeCalendar
                                                    value={value}
                                                    onChange={(newValue) =>
                                                        setValue(newValue)
                                                    }
                                                />
                                            </DemoItem>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Box>
                            </ButtonWithPopup>
                        </Stack>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            px: 2,
                            p: { xs: "7px", sm: "auto" },
                            mt: { xs: "13px", lg: "0px" },
                            fontWeight: 500,
                            borderBottomRightRadius: { xs: "13px", lg: "35px" },
                            borderTopRightRadius: { xs: "13px", lg: "35px" },
                            borderTopLeftRadius: { xs: "13px", lg: "0px" },
                            borderBottomLeftRadius: { xs: "13px", lg: "0px" },
                        }}
                    >
                        <Stack direction={"row"} alignItems={"center"}>
                            <div className="me-5 text-lg sm:text-2xl md:text-4xl">
                                Book <br className="hidden lg:block" /> Now
                            </div>
                            <East />
                        </Stack>
                    </Button>
                </Stack>
            </Container>
        </>
    );
}
