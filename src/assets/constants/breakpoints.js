
const size = {
bp_small: '25em', // 400px
bp_small_2: '30em', //480px
bp_med: '', //
bp_med_2: '37.5em', //600px
bp_large: '48em', //768px
bp_large_2: '56.25em', //900px
bp_xl: '64em', //1024px
bp_xl_1: '68.75em',    // 1100px
bp_xl_2: '75em', //1200px
}
 


export const device = {
  bp_landscape_small: `only screen and (max-height: ${size.bp_small}) and (orientation: landscape)`,
  bp_landscape_med: `only screen and (max-height: ${size.bp_med_2}) and (orientation: landscape)`,
  bp_xl_2: `only screen and (min-width: ${size.bp_xl_2})`,    // 1200px
  bp_xl_1: `only screen and (max-width: ${size.bp_xl_1})`,    // 1100px
  bp_xl: `only screen and (max-width: ${size.bp_xl})`,      // 1024px
  bp_large_2: `only screen and (max-width: ${size.bp_large_2})`,      // 900px
  bp_large: `only screen and (max-width: ${size.bp_large})`,      // 768px
  bp_med_2: `only screen and (max-width: ${size.bp_med_2})`,      // 600px
  bp_small_2: `only screen and (max-width: ${size.bp_small_2})`,        // 480px
  bp_small: `only screen and (max-width: ${size.bp_small})`,        // 400px
};

// screen and (orientation: landscape)
 


// export const device = {
//   bpLargest: `only screen and (max-width: ${size.bpLargest})`,    // 1200px
// bp_xl  bpLarge: `only screen and (max-width: ${size.bpLarge})`,        // 1100px
//   bpMediumLg: `only screen and (max-width: ${size.bpMediumLg})`,  // 980px
// bp_large_2  bpMedium: `only screen and (max-width: ${size.bpMedium})`,      // 900px
// bp_large  bpMediumSm: `only screen and (max-width: ${size.bpMediumSm})`,  // 720px 
//   bpSmall: `only screen and (max-width: ${size.bpSmall})`,        // 600px
//   bpSmallest: `only screen and (max-width: ${size.bpSmallest})`,  // 500px
// };