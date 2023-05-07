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


  }






});

export default styles;
