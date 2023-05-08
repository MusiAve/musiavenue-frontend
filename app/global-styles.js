import { createStyles } from '@mui/styles';
import Theme from 'theme/Theme';

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
  headerFooterLayoutMainWrap: {
    width: '100%',
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
            color: '#fff'
          },
        },
        '& p': {
          fontWeight: 700
        },
      }
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
    // **** start home view css ****
    '& .homeViewMainWrap': {
      '& .sliderMainWrap': {
        height: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& .userCardSectionWrap': {
        padding: '20px',
        justifyContent: 'space-between',
        "& div": {
          height: '450px',
          flex: '0 1 23%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }
      },
      '& .paymentOptionsWrap': {
        padding: 20,
        justifyContent: 'space-between',
        "& .pricingMethodCard": {
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          '& .pricingContentBox': {
            textAlign: 'center',
            width: 400,
            marginTop: 30,
            '& h2': {
              width: 270,
              margin: '0 auto',
              fontWeight: 900,
              color: ' #000',
              fontSize: '22px',
            },
            '& span': {
              color: '#666161',
              fontSize: 18,
              marginTop: 20,
              fontWeight: 500,
            }
          }
        }
      },
      '& .featuredProductMainWrap': {
        '& .featureSingleProduct': {
          height: '520px',
          maxWidth: '400px',
          minWidth: '380px',
          margin: '10px 0',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          padding: '10px',
          border: '1px solid transparent',
          cursor: 'pointer',
          '& .productImageContainer': {
            width: '100%',
            textAlign: 'center',
            padding: '20px',
            marginBottom: '10px',
            '& img': {
              width: 'auto',
              height: '280px',
              margin: '0 auto'
            },
          },
          '& button': {
            fontSize: '16px',
          },
          '&:hover': {
            border: '1px solid #850089',
            transition: '300ms ease-in',
            '& .productImageContainer': {
              transition: '300ms ease-in',
              background: '#F2F2F2',
            },
            '& button': {
              background: '#850089',
              transition: '200ms ease-in',
              color: '#fff'
            },
          }
        }
      }
    }

    // **** end home view css ****


  }
});

export default styles;
