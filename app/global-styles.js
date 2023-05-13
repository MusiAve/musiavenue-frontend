import { createStyles } from '@mui/styles';
import Theme from 'theme/Theme';

const roboto = "'Roboto Slab', serif";
const poppins = 'Poppins, sans-serif';
const montserrat = "'Montserrat', sans-serif";

const headerHeight = 65;
const drawerWidth = 270;

const styles = () => createStyles({
  '@global': {
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    body: {
      padding: 0,
      margin: 0,
      fontFamily: poppins,
    },
  },
  headerFooterLayoutMainWrap: {
    width: '100%',
    // **** start common css ****
    '& .p10': {
      padding: 10,
    },
    '& .p15': {
      padding: 15,
    },
    '& .p20': {
      padding: 20,
    },
    '& .sectionGap': {
      paddingTop: 80,
      paddingBottom: 80,
    },
    '& .sectionTopGap': {
      paddingTop: 80,
    },
    '& .sectionBottomGap': {
      paddingBottom: 80,
    },
    '& .commonBigSctnHdng': {
      color: Theme.palette.primary.main,
      fontSize: 40,
      fontFamily: roboto,
      marginBottom: 20,
      textTransform: 'capitalize',
      [Theme.breakpoints.up(1600)]: {
        fontSize: 50,
      },
      [Theme.breakpoints.up(1800)]: {
        fontSize: 60,
      },
    },
    '& .outlineBtnWrap': {
      fontSize: 16,
      padding: '5px 15px',
      lineHeight: '25px',
      backgroundColor: 'transparent',
      border: `1px solid ${Theme.palette.primary.main}`,
      borderRadius: 0,
      textTransform: 'uppercase',
      [Theme.breakpoints.up(1600)]: {
        fontSize: 18,
        padding: '10px 25px',
      },
      [Theme.breakpoints.up(1800)]: {
        fontSize: 22,
        padding: '12px 25px',
      },
      '&:hover': {
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.contrastText,
      },
      '&.whiteBtn': {
        color: Theme.palette.primary.contrastText,
        border: `1px solid ${Theme.palette.primary.contrastText}`,
        '&:hover': {
          color: Theme.palette.primary.dark,
          backgroundColor: Theme.palette.primary.contrastText,
          border: `1px solid ${Theme.palette.primary.contrastText}`,
        },
      }
    },
    '& .primaryBtnWrap': {
      fontSize: 16,
      padding: '8px 18px',
      lineHeight: '25px',
      backgroundColor: 'transparent',
      borderRadius: 0,
      backgroundColor: Theme.palette.primary.main,
      textTransform: 'uppercase',
      [Theme.breakpoints.up(1600)]: {
        fontSize: 18,
        padding: '12px 25px',
      },
      [Theme.breakpoints.up(1800)]: {
        fontSize: 22,
        padding: '15px 30px',
      },
      '&:hover': {
        backgroundColor: Theme.palette.primary.dark,
        color: Theme.palette.primary.contrastText,
      },
      '&.whiteBtn': {
        color: Theme.palette.primary.dark,
        backgroundColor: Theme.palette.primary.contrastText,
        '&:hover': {
          color: Theme.palette.primary.contrastText,
          backgroundColor: Theme.palette.primary.main,
        },
      }
    },
    '& .fieldMainWrap': {
      '& label': {
        fontSize: 15,
        margin: '0 0 8px 5px',
        display: 'block',
      },
      '& .MuiFormControl-root': {
        marginBottom: 0,
      },
      '& .MuiInputBase-root': {
        '& input': {
          fontSize: 16,
        },
        '& fieldset': {
          border: '1px solid #dedede',
        },
        '&:hover': {
          '& input': {
            fontSize: 16,
          },
          '& fieldset': {
            border: '1px solid #dedede',
          }
        },
        '&.Mui-focused': {
          '& input': {
            boxShadow: '0 0 10px #0000000d',
          },
          '& fieldset': {
            border: '1px solid #dedede',
            borderWidth: 1,
          }
        }
      },
    },
    '& .greyTxt': {
      color: `${Theme.palette.secondary.contrastText} !important`
    },
    '& .greyTxt16px': {
      color: `${Theme.palette.secondary.contrastText} !important`,
      fontSize: 16,
      '& svg': {
        fontSize: 16,
      }
    },
    // **** end common css ****

    // **** start top header css ****
    '& .topHeaderMainWrap': {
      backgroundColor: Theme.palette.primary.light,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      '& a': {
        textTransform: 'capitalize',
        fontWeight: 500,
        marginRight: 10,
        color: Theme.palette.secondary.contrastText,
        fontSize: 14,
        '&:hover': {
          color: Theme.palette.primary.main,
          cursor: 'pointer',
        }
      },
    },
    // **** end top header css ****

    // **** start middle header css ****
    '& .middleHeaderMainWrap': {
      backgroundColor: Theme.palette.primary.dark,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      '& p': {
        color: Theme.palette.primary.contrastText,
        fontSize: 16,
      },
      '& a': {
        color: Theme.palette.primary.contrastText,
        cursor: 'pointer',
      },
      '& .middleHeaderRight': {
        display: 'flex',
        gap: 15,
        alignItems: 'center',
        '& .rightCircle': {
          cursor: 'pointer',
          width: 40,
          height: 40,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            fontSize: '24px',
            color: '#AB79AE'
          },
          '& .MuiBadge-standard': {
            top: '-5px',
            right: '-5px',
            background: '#E1B079',
            color: Theme.palette.primary.contrastText
          },
        },
        '& p': {
          fontWeight: 700
        },
      },
      '& .middleHeaderCenter': {
        width: '40%',
        '& fieldset': {
          border: `1px solid ${Theme.palette.primary.contrastText}`
        },
        '& input': {
          color: Theme.palette.primary.contrastText,
          "&::placeholder": {
            color: `${Theme.palette.primary.contrastText} !important`,
            fontWeight: 500
          },
        },
        '& .MuiFormControl-root': {
          marginBottom: 0
        },
        '& .MuiInputAdornment-root svg': {
          color: '#c551c8',
          fontSize: 30
        }
      },
    },
    // **** end middle header css ****

    // **** start bottom header css ****
    '& .bottomHeaderMainWrap': {
      backgroundColor: Theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      '& a': {
        color: Theme.palette.primary.contrastText,
        textTransform: 'uppercase',
        fontSize: 13,
        fontWeight: 500,
        marginRight: 8,
        '&:hover': {
          color: Theme.palette.secondary.light,
          cursor: 'pointer',
        }
      },
    },
    // **** end bottom header css ****

    // **** start footer css ****
    '& .footerMainWrap': {
      backgroundColor: Theme.palette.primary.dark,
      paddingLeft: 30,
      paddingRight: 30,
      color: Theme.palette.primary.contrastText,
      '& .text-14': {
        fontSize: 14,
        [Theme.breakpoints.up(1400)]: {
          fontSize: 16,
        },
        [Theme.breakpoints.up(1700)]: {
          fontSize: 18,
        }
      },
      '& p': {
        color: Theme.palette.primary.contrastText,
      },
      '& a': {
        '&:hover': {
          color: Theme.palette.secondary.light,
        }
      },
      '& .topFooterMainWrap': {
        paddingBottom: 40,
      },
      '& .bottomFooterTopWrap': {
        padding: '20px 0 40px 0',
        borderTop: '1px solid #ffffff4d',
        borderBottom: '1px solid #ffffff4d',
      },
      '& .topHeaderLogoSection': {
        paddingRight: '10%',
        '& .footerLogoWrap': {
          display: 'flex',
          alignItems: 'center',
          height: 85,
          '& img': {
            width: 'auto',
            maxWidth: '100%'
          },
        },
        '& p': {
          margin: '20px 0',
          textAlign: 'justify',
        },
        '& h5': {
          [Theme.breakpoints.up(1700)]: {
            fontSize: 22,
          }
        }
      },
      '& .ftrMenuTxt': {
        fontSize: 15,
        marginBottom: 15,
        fontWeight: 400,
        [Theme.breakpoints.up(1700)]: {
          fontSize: 18,
        }
      },
      '& .footerMenuList': {
        '& h5': {
          color: '#a5a5a5',
          fontFamily: roboto,
          fontWeight: 400,
          margin: '0 0 20px 0',
          display: 'flex',
          alignItems: 'center',
          height: 85,
          [Theme.breakpoints.up(1700)]: {
            fontSize: 24,
          }
        },
        '& a': {
          display: 'block',
        },
        '&.storeHoursList': {
          paddingLeft: '5%',
          '& .ftrMenuTxt': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 240,
            [Theme.breakpoints.up(1700)]: {
              maxWidth: 270,
            },
            '& span': {
              fontWeight: 400,
              fontSize: 14,
              [Theme.breakpoints.up(1700)]: {
                fontSize: 16,
              }
            }
          }
        },
        '&.contactList': {
          '& .ftrMenuTxt': {
            display: 'flex',
            alignItems: 'center',
            '& svg': {
              marginRight: 5,
            },
            '&.phone': {
              fontSize: 25,
              [Theme.breakpoints.up(1700)]: {
                fontSize: 30,
              }
            }
          }
        },
      },
      '& .socialListWrap': {
        marginTop: 40,
        '& a': {
          '&:not(:last-child)': {
            marginRight: 5,
          },
          '& img': {
            width: 35,
          }
        }
      },
      '& .footerNewsletterMain': {
        '& .MuiInputBase-root': {
          borderRadius: 0,
        },
        '& input': {
          color: Theme.palette.primary.contrastText,
          [Theme.breakpoints.up(1600)]: {
            padding: 15,
            fontSize: 20,
          }
        },
        '& button': {
          boxShadow: 'none',
          marginTop: 10,
          '&:hover': {
            backgroundColor: Theme.palette.primary.contrastText,
            color: Theme.palette.primary.dark,
          }
        }
      },
      '& .copyrightSectionWrap': {
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        '& p': {
          margin: '0 10px 0 0'
        }
      }
    },
    // **** end footer css ****

    // **** start home view css ****
    '& .homeViewMainWrap': {
      '& .sliderMainWrap': {
        height: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& .userCardSectionWrap': {
        '& .userCardBoxesWrap': {
          height: 400,
          padding: 20,
          position: 'relative',
          [Theme.breakpoints.up(1700)]: {
            height: 550,
          },
          [Theme.breakpoints.down('lg')]: {
            height: 300,
            padding: 12,
          },
          [Theme.breakpoints.down('md')]: {
            height: 250,
          },
          [Theme.breakpoints.down('sm')]: {
            height: 200,
          },
          '& p': {
            margin: 0,
            position: 'absolute',
            bottom: 20,
            fontFamily: roboto,
            textAlign: 'center',
            width: '100%',
            left: 0,
            color: '#dedede',
            fontSize: 20,
            fontWeight: 500,
            padding: '0 8px',
            [Theme.breakpoints.up(1700)]: {
              fontSize: 25,
              bottom: 25,
            },
            [Theme.breakpoints.down('lg')]: {
              fontSize: 16,
            },
            [Theme.breakpoints.down('md')]: {
              fontSize: 15,
            },
            [Theme.breakpoints.down('sm')]: {
              fontSize: 14,
            },
          }
        }
      }, // end user card
      '& .paymentOptionsWrap': {
        "& .pricingMethodCard": {
          height: '100%',
          padding: 30,
          textAlign: 'center',
          [Theme.breakpoints.up(1800)]: {
            padding: 40,
          },
          '& img': {
            height: 110,
          },
          '& .pricingOptionCntnt': {
            width: '85%',
            margin: '15px auto 20px auto',
            [Theme.breakpoints.up(1600)]: {
              margin: '30px auto 25px auto',
            },
          },
          '& h2': {
            fontWeight: 900,
            color: Theme.palette.primary.dark,
            fontSize: 20,
            [Theme.breakpoints.up(1600)]: {
              fontSize: 25,
            },
            [Theme.breakpoints.up(1800)]: {
              fontSize: 28,
            },
            [Theme.breakpoints.down('lg')]: {
              fontSize: 18,
            },
          },
          '& p': {
            color: Theme.palette.secondary.contrastText,
            fontSize: 16,
            marginTop: 20,
            fontWeight: 500,
            [Theme.breakpoints.up(1600)]: {
              fontSize: 20,
            },
            [Theme.breakpoints.up(1800)]: {
              fontSize: 24,
            },
          },
        }
      }, // end payment option card
      '& .productListBoxesWrap': {
        padding: 10,
        border: '1px solid transparent',
        cursor: 'pointer',
        '& .productImageContainer': {
          width: '100%',
          padding: 20,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& img': {
            width: 'auto',
            height: 200,
            margin: '0 auto',
            [Theme.breakpoints.up(1600)]: {
              height: 250,
            },
            [Theme.breakpoints.up(1800)]: {
              height: 300,
            },
          },
        },
        '& .productBoxContent': {
          paddingTop: 20,
          '& h4': {
            color: Theme.palette.primary.dark,
            fontSize: 16,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': 1,
            [Theme.breakpoints.up(1600)]: {
              fontSize: 20,
            },
            [Theme.breakpoints.up(1800)]: {
              fontSize: 24,
            },
          },
          '& p': {
            margin: '12px 0',
            color: Theme.palette.primary.main,
            fontWeight: 500,
            [Theme.breakpoints.up(1600)]: {
              fontSize: 20,
            },
            [Theme.breakpoints.up(1800)]: {
              fontSize: 24,
            },
          }
        },
        '&:hover': {
          border: `1px solid ${Theme.palette.primary.main}`,
          transition: '300ms ease-in',
          '& .productImageContainer': {
            transition: '300ms ease-in',
            background: Theme.palette.secondary.dark,
          },
          '& button': {
            background: Theme.palette.primary.main,
            transition: '200ms ease-in',
            color: Theme.palette.primary.contrastText
          },
        }
      }, // end featured product card
      '& .topDealsMainWrap': {
        backgroundColor: Theme.palette.secondary.dark,
        '& .productListBoxesWrap': {
          padding: 2,
          background: Theme.palette.primary.contrastText,
          border: 'none !important',
          boxShadow: '0 0 10px #dedede',
          transition: '0.4s',
          '&:hover': {
            boxShadow: '0 0 15px #0000001c',
            transition: '0.4s',
            '& .productImageContainer': {
              background: Theme.palette.primary.contrastText,
            },
          },
          '& .productImageContainer': {
            background: Theme.palette.primary.contrastText,
          },
          '& .productBoxContent': {
            padding: 20,
            backgroundColor: Theme.palette.secondary.dark,
          },
        },
        '& .topDealsRightSide': {
          '& .topDealsRightSideBgImg': {
            width: '100%',
            height: '100%',
            paddingLeft: 15,
          }
        },
      },
    }, // end top deals section
    '& .bigProductBannerMainWrap': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'initial',
      '& .bigProductBannerCntntWrap': {
        width: '90%',
        margin: '0 auto',
        '& .commonBigSctnHdng': {
          color: Theme.palette.primary.dark,
          fontWeight: 400,
        },
        '& ul': {
          listStyle: 'none',
          padding: 0,
          margin: 0,
          '& li': {
            margin: '0 0 10px 0',
            color: Theme.palette.primary.dark,
            fontWeight: 500,
            [Theme.breakpoints.up(1600)]: {
              fontSize: 20,
            },
            [Theme.breakpoints.up(1800)]: {
              fontSize: 24,
            },
          }
        },
        '& h5': {
          margin: '25px 0',
          fontSize: 25,
          fontWeight: 500,
          color: Theme.palette.primary.main,
          [Theme.breakpoints.up(1600)]: {
            fontSize: 30,
          },
          [Theme.breakpoints.up(1800)]: {
            fontSize: 35,
          },
        }
      }
    }, // end big product banner section
    '& .articleSectionMainWrap': {
      backgroundColor: Theme.palette.primary.contrastText,
      '& .articeBoxesWrap': {
        position: 'relative',
        backgroundColor: Theme.palette.primary.main,
        height: '100%',
        '& .articleImageContainer': {
          backgroundColor: '#e7e7e7',
          '& img': {
            height: 250,
            width: '100%',
            objectFit: 'cover',
          }
        },
        '& .articleBoxContent': {
          textAlign: 'center',
          padding: '15px 10px',
          '& p': {
            color: Theme.palette.primary.contrastText,
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'uppercase',
            [Theme.breakpoints.up(1600)]: {
              fontSize: 18,
            },
            [Theme.breakpoints.up(1800)]: {
              fontSize: 22,
            },
          }
        }
      },
    }, // end article & resources section
    '& .storeLocatorBannerMainWrap': {
      position: 'relative',
      paddingTop: 100,
      paddingBottom: 100,
      [Theme.breakpoints.up(1600)]: {
        paddingTop: 150,
        paddingBottom: 150,
      },
      '& .bgImgWrap': {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        position: 'absolute',
        objectFit: 'cover',
        filter: 'brightness(0.3)',
      },
      '& .storeLocatorBannerCntntWrap': {
        width: '90%',
        margin: '0 auto',
        zIndex: 1,
        position: 'relative',
        textAlign: 'center',
        '& .commonBigSctnHdng': {
          color: Theme.palette.primary.contrastText,
          fontWeight: 300,
          fontSize: 30,
          [Theme.breakpoints.up(1600)]: {
            fontSize: 35,
          },
          [Theme.breakpoints.up(1800)]: {
            fontSize: 45,
          },
        },
        '& button': {
          padding: '10px 25px',
          marginTop: 30,
          [Theme.breakpoints.up(1600)]: {
            padding: '15px 30px',
          },
          [Theme.breakpoints.up(1800)]: {
            padding: '20px 35px',
          },
        }
      }
    },
    '& .reviewMainWrap': {
      display: 'flex',
      paddingRight: '20px',
      paddingLeft: '20px',
      '& .reviewBoxMainContainer': {
        [Theme.breakpoints.down(576)]: {
          flexBasis: '100%',
          maxWidth: '100%',
        },
      },
      '& .reviewBoxMain': {
        backgroundColor: '#7575750d !important',
        padding: 20,
        '& .reviewStarBoxWrap': {
          '& svg': {
            fontSize: 15,
            margin: '0 2px 0 0',
            background: '#00c67c',
            color: Theme.palette.primary.contrastText,
          },
        },
        '& .reviewContent': {
          '& p': {
            color: Theme.palette.primary.dark
          }
        }
      }
    },
    '& .keyFeaturesMainWrap': {
      paddingLeft: '150px',
      paddingRight: '150px',
    },

    // **** end home view css ****

    // **** start auth page css ****

    '& .authPageMainWrap': {
      padding: '60px 20px',
      backgroundColor: Theme.palette.secondary.dark,
      minHeight: 'calc(100vh - 150px)',
      '&.registerPageMainWrap': {
        '& .authPageCntntWrap': {
          maxWidth: 900,
        },
      },
      '& .authPageCntntWrap': {
        maxWidth: 550,
        margin: '0 auto',
        backgroundColor: Theme.palette.primary.contrastText,
        padding: 30,
        borderRadius: '8px',
        border: '1px solid #c5c5c5',
        boxShadow: '0 0 15px #0000001a',
      },
      '& .formTitle': {
        fontWeight: 500,
        marginBottom: 15,
      },
      '& .formTextLinkWrap': {
        fontSize: 16,
        color: Theme.palette.primary.dark,
        fontWeight: 400,
        '& a': {
          color: Theme.palette.primary.main,
          fontWeight: 500,
          cursor: 'pointer',
          '&:hover': {
            color: Theme.palette.primary.dark,
          }
        }
      },
      '& .smallGreyTxt': {
        color: '#898989',
        fontSize: 15,
        '& a': {
          fontSize: 15,
        }
      },
      '& .primaryBtnWrap': {
        borderRadius: '5px'
      }
    },

    // **** end auth page css ****

  },


  // ========================== Start Dashboard Layouts css ==========================

  dashboardLayoutMainWrap: {
    minHeight: '100vh',
    // **** start common css ****
    '& .userMenuMainWrap': {
      '& .MuiAvatar-root': {
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.contrastText,
      }
    },
    '& .commonDropMenuWrap': {
      '& ul': {
        '& li': {
          padding: '2px 15px',
          fontSize: 15,
          color: Theme.palette.primary.dark,
          '& svg': {
            color: Theme.palette.primary.dark,
          }
        }
      }
    },

    // **** end common css ****
    // **** start sidebar css ****
    '& .sidebarLogoWraper': {
      '& img': {
        width: 'auto',
        maxWidth: '100%',
        maxHeight: 55,
      },
    },
    '& .sidebarContentMainWrap': {

    },
    '& .sidebarListMainWraper': {
      padding: '15px 10px',
      '& .MuiListItem-root': {
        padding: '5px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: 5,
        '&:hover': {
          backgroundColor: Theme.palette.secondary.dark,
        },
        '&.Mui-selected': {
          backgroundColor: Theme.palette.primary.main,
          '& span': {
            color: Theme.palette.primary.contrastText,
            fontWeight: 500,
          },
          '& .MuiListItemIcon-root': {
            '& svg': {
              color: Theme.palette.primary.contrastText,
            }
          },
        },
        '& .MuiListItemIcon-root': {
          minWidth: 38,
          '& svg': {
            fontSize: 20,
          }
        },
        '& span': {
          fontSize: 16,
          color: Theme.palette.primary.dark,
          fontWeight: 400,
        },
      },
      '& .submenuMainWrap': {
        '& ul': {
          paddingLeft: 35,
          '& li': {
            '& span': {
              color: Theme.palette.secondary.contrastText,
            },
          }
        }
      }
    },
    // **** end sidebar css ****

    // **** start header css ****
    '& .dashboardHeaderWrap': {
      backgroundColor: Theme.palette.primary.contrastText,
      '& .dashHeaderInnerMain': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        '& .headerLeft': {
          display: 'flex',
          alignItems: 'center',
        },
        '& .headerRight': {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    // **** end header css ****

    // **** start Dashboard Contents css ****
    '& .dashboardContentMainWrap': {

    },
    // **** end Dashboard Contents css ****
  },



  // ========================== End Dashboard Layouts css ==========================
});

export default styles;
