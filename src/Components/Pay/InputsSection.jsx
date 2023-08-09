import { Grid } from "@mui/material";
import { InputCustom2 } from "../InputCustom";
import PropTypes from "prop-types";
export default function InputsSection({ InputsSection}) {
    return (
        <>
            <Grid container columnSpacing={{ xs: 2, md: 3 }} sx={{ mb: 5 }}>
                {InputsSection?.map((input, i) => (
                    <Grid key={i} item xs={12} sm={6} md={6} lg={6}>
                        <InputCustom2
                            lebel={input.lebel}
                            placeholder={input.placeholder}
                            type={input.type}
                            id={input.id}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
InputsSection.propTypes = {
    InputsSection: PropTypes.array.isRequired,
};
