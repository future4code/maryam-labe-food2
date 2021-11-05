import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import  Select  from "@material-ui/core/Select";
import  {FormControl}  from "@material-ui/core";




function getModalStyle() {

  return {
    top: `58%`,
    left: `57%`,
    transform: `translate(-58%, -57%)`,
    width: '80vw',
  };
}

const styles = (theme) => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
});

class SimpleModal extends React.Component {

  state={
    item:0
  };

  handleChange = (event) =>{
    this.setState({item:event.target.value});
  }

  render() {
    const { classes, open, setOpen, AddToCart, Products, restaurantId } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={() => setOpen(false)}
          alignItems="center"
          justify="center"
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6">
            Selecione a quantidade desejada
            </Typography>

            <FormControl variant="outlined" className={classes.formControl}
            fullWidth
            margin="normal">
          <Select
            native
            value={this.state.item}
            onChange={this.handleChange}
          >
            <option value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Select>
        </FormControl>
            <SimpleModalWrapped />
            <Button color="primary" onClick={() => {setOpen(false); AddToCart(Products, this.state.item, restaurantId)}}>Adicionar ao carrinho</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
