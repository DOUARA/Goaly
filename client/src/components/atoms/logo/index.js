import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// Component Style
const useStyles = makeStyles(() => ({
  logo: {
    "& g": {
      stroke: props => props.color
    },
    "& text": {
      fill: props => props.color
    },
    "& .smallCircle": {
      fill: props => props.color
    }
  }
}));

const Logo = props => {
  // Component ClassNames
  const classes = useStyles(props);

  return (
    <div {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='122'
        height='39'
        viewBox='0 0 122 39'
        className={classes.logo}
      >
        <text
          transform='translate(49 30)'
          fill='#336'
          fontSize='26'
          fontFamily='Helvetica-Bold, Helvetica'
          fontWeight='700'
        >
          <tspan x='0' y='0'>
            Goaly
          </tspan>
        </text>
        <g fill='rgba(255,255,255,0)' stroke='#eb4d55' strokeWidth='2'>
          <circle cx='19.5' cy='19.5' r='19.5' stroke='none' />
          <circle cx='19.5' cy='19.5' r='18.5' fill='none' />
        </g>
        <g
          transform='translate(7 7)'
          fill='rgba(255,255,255,0)'
          stroke='#eb4d55'
          strokeWidth='2'
        >
          <circle cx='12.5' cy='12.5' r='12.5' stroke='none' />
          <circle cx='12.5' cy='12.5' r='11.5' fill='none' />
        </g>
        <g
          transform='translate(15 15)'
          fill='#eb4d55'
          stroke='#eb4d55'
          strokeWidth='1'
        >
          <circle cx='4.5' cy='4.5' r='4.5' stroke='none' />
          <circle cx='4.5' cy='4.5' r='4' fill='none' className='smallCircle' />
        </g>
      </svg>
    </div>
  );
};

// Default props and proptypes
Logo.defaultProps = {
  color: ""
};

Logo.propTypes = {
  color: PropTypes.string
};

export default Logo;
