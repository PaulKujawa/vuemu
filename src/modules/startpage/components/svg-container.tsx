import { makeStyles, createStyles } from "@material-ui/styles";
import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    svg: {
      "max-height": "100vh",
      "max-width": "100%",
      "margin-left": "auto",
      "margin-right": "auto",
      padding: "1rem 0"
    },
    "@keyframes fading-notes": {
      "0%": {
        opacity: 0
      },
      "100%": {
        opacity: 1
      }
    },
    note1: {
      animation: "$fading-notes 1.5s 1s infinite alternate ease-in backwards"
    },
    note2: {
      animation: "$fading-notes 2s 2s infinite alternate ease-in backwards"
    },
    note3: {
      animation: "$fading-notes 2.5s 0s infinite alternate ease-in backwards"
    },
    note4: {
      animation: "$fading-notes 2s 1.5s infinite alternate ease-in backwards"
    }
  })
);

export const SvgContainer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const darkGrey = "#2f2e41";
  const viewBox = useMediaQuery(theme.breakpoints.up("md"))
    ? "0 0 888 690"
    : "350 0 400 690";

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className={classes.svg}
      >
        <ellipse id="floor" cx="450" cy="675" rx="420" ry="15" fill="#d0cde1" />

        <g id="rightTree" fill="#d0cde1" strokeWidth="0.5">
          <path d="M811,669 l4,-168 l2 168" />
          <path d="M815.5,566 l20,-29 l-20,25" />
          <path d="M815,585 l-22,-38 l22,32" />
          <path d="M815.5,604 l18,-35 l-18,31" />
          <path d="M813.5,627 l-25,-39 l24,32" />
          <path d="M815.5,629 l26,-50 l-26,44" />
          <path d="M815,668 l20,-30 l-20,25" />
        </g>

        <g id="leftTree" fill="#575a89" strokeWidth="0.5">
          <path d="M154,680 l14.5,-503 l1 503" />
          <path d="M165.5,370 l60,-88 l-60,73" />
          <path d="M165,415 l-60,-108 l60,90" />
          <path d="M165.5,479 l56,-110 l-56,94" />
          <path d="M165.5,536 l-75,-113 l75,96" />
          <path d="M165.5,549 l80,-150 l-80,130" />
          <path d="M165,674 l68,-108 l-68,99" />
        </g>

        <g id="flower">
          <path
            d="M660 660
                 q-30 -40 10 -20
                 q-10 -50 20 -10
                 q30 -40 20 10
                 q40 -20 10 20
                 q-30 30 -60 0"
            fill={primaryColor}
          />
        </g>

        <g className={classes.note1}>
          <circle cx="634.5" cy="73" r="9" fill={primaryColor} />
          <polyline
            points="642,72 635,29 670,18 677,58"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <circle cx="670" cy="61" r="9" fill={primaryColor} />
        </g>

        <g className={classes.note2}>
          <circle cx="713" cy="105" r="9" fill={primaryColor} />
          <line
            x1="715"
            y1="70"
            x2="720.5"
            y2="105"
            stroke={primaryColor}
            strokeWidth="3"
          />
        </g>

        <g className={classes.note3}>
          <circle cx="759.5" cy="52" r="9" fill={primaryColor} />
          <line
            x1="767"
            y1="50"
            x2="762"
            y2="86"
            stroke={primaryColor}
            strokeWidth="3"
          />
        </g>

        <g className={classes.note4}>
          <circle cx="809.5" cy="88" r="9" fill={primaryColor} />
          <polyline
            points="817,87 810,44 845,33 852,73"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <circle cx="845" cy="76" r="9" fill={primaryColor} />
        </g>

        <g id="woman">
          <polygon
            id="leftJoint"
            points="473,554 488,576 509,559 495,541 473,554"
            fill="#ffb8b8"
          />

          <path
            id="leftShoe"
            d="M646.83879,669.7106s-20.8743.97029-14.9902,12.00457,10.47435,73.29644,27.26835,69.68887,32.02057-22.69049,31.834-35.82712-2.28893-18.83415-2.28893-18.83415-4.50326-8.69557-1.50522-11.09648,4.1301-17.5777-3.01044-22.19295S656.36785,652.73,656.36785,652.73,654.27791,671.62637,646.83879,669.7106Z"
            transform="translate(-156 -104.69743)"
            fill={darkGrey}
          />

          <polygon
            id="rightJoint"
            points="501,605 496,632 522,635 522,614 501,605"
            fill="#ffb8b8"
          />

          <path
            id="leftLeg"
            d="M605.15581,348.63984s-13.36065,44.94036-17.00447,71.66166c0,0-72.87626,98.383-59.51561,140.89411s52.228,127.53347,52.228,127.53347,65.58864-26.7213,78.94929-41.29655l-48.58418-69.23245s7.28763-8.50223-3.64381-13.36065-1.21461-10.93144-1.21461-10.93144,20.64828-69.23245,41.29655-76.52008l71.66166-14.57525s-4.85842-103.24138-21.86288-121.46045C697.46574,341.35221,612.44343,342.56682,605.15581,348.63984Z"
            transform="translate(-156 -104.69743)"
            fill={darkGrey}
          />

          <path
            id="rightShoe"
            d="M663.45682,726.38182s-12.146-17.00447-18.21907-6.073S589.366,768.893,601.512,781.039s36.43814,14.57525,47.36958,7.28762,14.57525-12.146,14.57525-12.146,4.85842-8.50223,8.50223-7.28763,17.00446-6.073,17.00446-14.57525-6.073-29.15051-6.073-29.15051S665.886,733.66944,663.45682,726.38182Z"
            transform="translate(-156 -104.69743)"
            fill={darkGrey}
          />

          <path
            id="rightLeg"
            d="M645.23775,468.88568l17.00446,146.96713s-9.71683,41.29655-12.146,72.87627,0,30.36511,0,30.36511,54.6572,21.86288,64.374,7.28763,4.85842-263.56916,4.85842-263.56916l-29.1505-26.7213Z"
            transform="translate(-156 -104.69743)"
            fill={darkGrey}
          />

          <path
            id="hair"
            d="M615.58635,140.78914c12.60928-29.75165,44.707-35.37054,44.707-35.37054s30.90545-8.2449,56.71559,31.02107c24.05712,36.59912,55.08021,70.88925,15.73675,85.49774l-10.3926-21.82606-1.24675,25.11827a160.17971,160.17971,0,0,1-17.3201,2.62842c-43.63952,4.43335-84.77656,11.80475-85.53844-3.96629C617.235,202.92639,603.4537,169.41618,615.58635,140.78914Z"
            transform="translate(-156 -104.69743)"
            fill={darkGrey}
          />

          <circle
            id="face"
            cx="511.10063"
            cy="59.32254"
            r="35.22353"
            fill="#ffb8b8"
          />

          <path
            id="throat"
            d="M656.77649,186.49015s-.6073,35.83083-4.25111,44.33306,64.98134-6.68032,64.98134-6.68032-24.29209-17.00446-27.93591-40.082Z"
            transform="translate(-156 -104.69743)"
            fill="#ffb8b8"
          />

          <path
            id="torso"
            d="M662.24221,216.248l-6.6331-4.87866-46.80949,2.44945-9.71684,106.88519s-27.9359,32.79432,6.073,32.79432,65.58864-15.78986,89.88072-4.85842S739.9769,233.25242,739.9769,233.25242L703.664,211.3693S687.74891,230.82321,662.24221,216.248Z"
            transform="translate(-156 -104.69743)"
            fill="#575a89"
          />

          <path
            id="leftLowerArm"
            d="M622.16027,302.48487l68.01785,14.57526V332.85l-68.01785,2.42921S614.87264,307.34329,622.16027,302.48487Z"
            transform="translate(-156 -104.69743)"
            fill="#ffb8b8"
          />

          <path
            id="leftUpperArm"
            d="M622.16027,219.89177l-13.36065-6.073s-15.78986,3.64381-17.00446,17.00446-24.29209,99.59756-6.073,103.24138,42.51115,3.64381,42.51115,3.64381-15.78986-21.86288,3.64381-34.00892l-14.57525-7.28763s-14.57525-32.79432-4.85842-49.79878S622.16027,219.89177,622.16027,219.89177Z"
            transform="translate(-156 -104.69743)"
            fill="#575a89"
          />

          <polygon
            id="hairFringe"
            points="466.716 25.283 498.883 8.433 543.306 15.326 552.496 55.919 529.618 55.039 523.226 40.126 523.226 54.793 512.67 54.387 506.542 30.644 502.713 55.919 465.184 55.153 466.716 25.283"
            fill={darkGrey}
          />

          <ellipse
            id="ear"
            cx="546.52662"
            cy="55.88804"
            rx="6.47786"
            ry="11.33626"
            fill="#ffb8b8"
          />

          <g id="headphone">
            <circle cx="547" cy="59.3" r="4.4" fill="#fff" />
            <ellipse cx="549" cy="59" rx="0.7" ry="2" fill={darkGrey} />
            <path d="M546,62 h4 v10 q-1 0.5 -2 0Z" fill="#fff" />
          </g>

          <polygon
            id="leftArmShadow"
            points="460.7,148.1 449.2,197.8 476.0,197.8 454.9,193.0 460.7,148.1"
            opacity="0.1"
          />

          <g id="phone">
            <path
              d="M754.89425,334.94933l-.25428-.22917,6.27805-6.966a5.42748,5.42748,0,0,0-.39814-7.66529L745.76157,306.788a5.42746,5.42746,0,0,0-7.66528.39813l-34.44188,38.21576a5.42747,5.42747,0,0,0,.39814,7.66529l14.75831,13.30089a5.42746,5.42746,0,0,0,7.66528-.39813l23.695-26.29132.25428.22917Z"
              transform="translate(-156 -104.69743)"
              fill="#3f3d56"
            />
            <circle cx="587" cy="219" r="3.5" fill={primaryColor} />
          </g>

          <path
            id="rightHand"
            d="M719.06276,322.48677s41.40429,10.02128,31.86466,24.30946-47.20249-11.8275-47.20249-11.8275Z"
            transform="translate(-156 -104.69743)"
            fill="#ffb8b8"
          />

          <path
            id="rightUpperArm"
            d="M729.04546,233.25242H739.9769s12.146,13.36065,9.71683,25.50669-9.71683,69.23246-9.71683,69.23246-36.43814,34.00892-54.6572,15.78985-4.85842-35.22353-4.85842-35.22353,24.29209,19.43368,37.65274-6.073Z"
            transform="translate(-156 -104.69743)"
            fill="#575a89"
          />
          <path
            id="rightLowerArm"
            d="M718.182,316.06261l8.36576-82.65247s17.54742-52.17864.418-53.45749-18.33264,49.44478-18.33264,49.44478l-29.83367,90.44266S695.17162,335.87583,718.182,316.06261Z"
            transform="translate(-156 -104.69743)"
            fill="#ffb8b8"
          />
        </g>
      </svg>
    </div>
  );
};
