import { createStyles } from '@mui/styles';
import Theme from 'theme/Theme';

const headerHeight = '52px';
const dashboardBgColor = '#f4f7fe';

const styles = () => createStyles({
  '@global': {
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    body: {
      padding: 0,
      margin: 0,
      fontFamily: 'Poppins, sans-serif',
    },
  },
  authLayoutMainWrap: {
    backgroundColor: Theme.palette.primary.main,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '45px 0',
    minHeight: 'calc(100vh - 0px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '& .topLeftBgDecor': {
      position: 'absolute',
      top: 20,
      left: 20,
      filter: 'invert(100)',
      opacity: '0.3',
    },
    '& .bottomRightBgDecor': {
      position: 'absolute',
      bottom: 20,
      right: 20,
      zIndex: 1,
      filter: 'invert(100)',
      opacity: '0.3',
    },
    '& .blankGridWrapper': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    '& .authFormBoxMainWrap': {
      boxShadow: '0 0 40px #00000017',
      position: 'relative',
      zIndex: 1,
      padding: '0',
      borderRadius: '10px',
      width: 1050,
      maxWidth: '100%',
      '& .logo': {
        width: 75,
        margin: '0 0 50px 0',
        filter: 'brightness(100)',
      },
    },
    '& .authBoxLftHeadingMainWrap': {
      display: 'flex',
      alignItems: 'center',
      padding: 35,
      paddingRight: 0,
      '& p': {
        color: Theme.palette.primary.contrastText,
      },
    },
    '& .authBoxHeadingCntntWrap': {
      background: Theme.palette.primary.dark,
      padding: 30,
      borderRadius: '10px',
      height: 'calc(100% - 60px)',
    },
    '& .authBoxRghtMainWrap': {
      padding: '35px 60px',
    },
    '& .blackLink': {
      display: 'inline',
      transition: '0.5s',
      color: Theme.palette.secondary.dark,
      '&:hover': {
        color: Theme.palette.primary.dark,
        transition: '0.5s',
      },
    },
  },
  // end auth page css

  sidebarMainWraper: {
    '& .sidebarMainListUl': {
      overflow: 'hidden',
      overflowY: 'auto',
      height: '100vh',
      padding: '8px 0 80px 0',
      margin: '10px 0 0 0',
      '&::-webkit-scrollbar-track': {
        backgroundColor: Theme.palette.primary.main
      },
      '&::-webkit-scrollbar': {
        width: 0,
        height: 0,
        backgroundColor: '#cfecf342'
      },
      '&:hover': {
        '&::-webkit-scrollbar': {
          backgroundColor: '#cfecf342'
        }
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#cfecf342',
      },
      '& .collapseMainWrap': {
        '& .MuiCollapse-wrapperInner': {
          margin: '4px 10px 0 22px',
          gap: '4px',
          display: 'flex',
          flexDirection: 'column',
        }
      },
    },

    '& li': {
      padding: '0 15px',
      margin: '0 0 10px 0',
      transition: '0s',
      [Theme.breakpoints.down('lg')]: {
        padding: '5px 10px',
      },
      '& a, button': {
        padding: 0,
        transition: '0s',
        borderRadius: '5px',
        minHeight: 'auto',
        '& .MuiListItemIcon-root': {
          minWidth: 35,
        },
        '& svg': {
          minWidth: 35,
          fontSize: 18,
        },
        '& .MuiTouchRipple-root': {
          display: 'none'
        },
        '&.active': {
          position: 'relative',
          transition: '0s',
          [Theme.breakpoints.down('lg')]: {
            '&::after, &::before': {
              display: 'none'
            }
          },
          '& span': {
            fontWeight: 500,
          },
        }
      },
      '& span': {
        fontFamily: 'Poppins,sans-serif',
        fontSize: 16,
      }
    },
  },

  // start datatable css
  commonDataTableMainWrap: {},
  // end datatable css

  // start common css
  mainLayoutWrap: {
    '& .whiteBoxWrap': {
      backgroundColor: '#ffffff',
      boxShadow: 'rgb(0 0 0 / 4%) 0px 10px 10px 4px',
      borderRadius: '10px',
      padding: 10,
      '& .colorBoxWrap': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        '& .circularColor': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          '& svg': {
            fontSize: '30px',
            color: '#ffffff'
          }
        }
      }
    },
    '& .verticalTabWrap': {
      '& .MuiTabs-flexContainer': {
        flexDirection: 'column',
      },
      '& .MuiTabs-root': {
        marginLeft: '-15px',
        '& .MuiTabs-indicator': {
          display: 'none',
        }
      },
      '& .MuiTab-root': {
        justifyContent: 'flex-start',
        padding: '8px 12px 8px 25px',
        margin: '0 0 10px 0',
        minHeight: 'auto',
        borderRadius: '0 50px 50px 0',
        textTransform: 'capitalize',
        fontWeight: 400,
        transition: '0.4s',
        '&:last-child': {
          margin: 0,
        },
        '&:hover': {
          background: '#3f30ff12',
          transition: '0.4s',
        },
        '& svg': {
          fontSize: 22,
        },
        '&.Mui-selected': {
          background: Theme.palette.info.light,
          color: Theme.palette.primary.dark,
        },
        '& .MuiTouchRipple-root': {
          display: 'none',
        }
      }
    },
    '& .uploadAvatarMainWrap': {
      position: 'relative',
      width: 75,
      height: 75,
      transition: '0.4s',
      '&:hover': {
        '& .uploadOverlay': {
          opacity: 1,
          transition: '0.4s',
        }
      },
      '& .uploadOverlay': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        background: '#00000057',
        borderRadius: '50%',
        color: Theme.palette.primary.contrastText,
        cursor: 'pointer',
        opacity: 0,
        transition: '0.4s',
        '& svg': {
          fontSize: 16,
        }
      },
      '& .deleteBtn': {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#f44338c7',
        color: Theme.palette.primary.contrastText,
        border: '2px solid #fff',
        width: 25,
        height: 25,
        '&:hover': {
          backgroundColor: Theme.palette.error.main,
          color: Theme.palette.primary.contrastText
        },
        '& svg': {
          fontSize: 16,
        }
      }
    },
    '& .fieldMainWrap': {
      '& input, textarea, select': {
        fontSize: 16,
      },
      '& label': {
        fontSize: 14,
        color: '#000',
        fontWeight: 400,
        display: 'block',
        margin: '0 0 6px 0',
      },
      '& .MuiInputBase-root': {
        '&:hover': {
          '& fieldset': {
            borderColor: '#0000003b',
          }
        },
        '&.Mui-focused': {
          '& fieldset': {
            borderColor: Theme.palette.primary.main,
            borderWidth: 1,
          }
        }
      },
      '& .MuiFormControl-root': {
        marginBottom: 8,
      }
    }
  },



  // end common css

});

export default styles;
