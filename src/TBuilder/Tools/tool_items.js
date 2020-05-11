import React from 'react'
import PanoramaTwoToneIcon from '@material-ui/icons/PanoramaTwoTone';
import TextFieldsTwoToneIcon from '@material-ui/icons/TextFieldsTwoTone';
import ListIcon from '@material-ui/icons/List';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import RemoveIcon from '@material-ui/icons/Remove';
import LinkTwoToneIcon from '@material-ui/icons/LinkTwoTone';

export default [
  { 
    id: 'image', label: 'Image', icon: <PanoramaTwoToneIcon />,
    styles: {
      'height': '100%'
    }
  },
  { id: 'header', label: 'Header', icon: <TextFieldsTwoToneIcon />,
    styles: {
      'text': 'Header - Lorem Ipsum',
      'height': '100%',
      'background': '#FFFF',
      'color': '#FFFF',
      'fontSize': '20px',
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center',
      'fontFamily': 'inherit',
      'backgroundImage': null,
      'backgroundRepeat': 'no-repeat',
      'backgroundSize': 'cover'
    }
  },
  { id: 'text', label: 'Text', icon: <TextFieldsTwoToneIcon />,
    styles: {
      text: 'Text - Lorem Ipsum',
      'fontSize': '20px',
      'height': '48px',
      'textAlign': 'left',
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center',
      'fontFamily': 'inherit',
      'color': '#000',
      'background': '#FFFF',
      padding: '0 10px',
      overflowWrap: 'anywhere'
    }
  },
  { id: 'paragraph', label: 'Paragraph', icon: <ViewHeadlineIcon />,
    styles: {
      fontSize: '14px',
      textAlign: 'left',
      lineHeight: '2',
      letterSpacing: '1',
      padding: '20px',
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center',
      'fontFamily': 'inherit',
      'color': '#000',
      'background': '#FFFF',
      'borderColor': 'rgba(0,0,0,0.3)',
      borderStyle: 'solid',
      borderWidth: '1px',
      overflowWrap: 'anywhere'
    }
  },
  { id: 'list', label: 'List', icon: <ListIcon />,
    styles: {
      fontSize: '20px',
      height: '50px',
      fontFamily: 'inherit',
      'background': '#FFFF'
    }
  },
  { id: 'separator', label: 'Horizontal Separator', icon: <RemoveIcon />,
    styles: {
      fontSize: '20px',
      height: '50px',
      fontFamily: 'inherit'
    }
  },
  { id: 'link', label: 'Text Hyperlink', icon: <LinkTwoToneIcon />,
    styles: {
      text: 'Link - Lorem Ipsum',
      hyperlink: 'https://google.com',
      fontSize: '20px',
      height: '50px',
      fontFamily: 'inherit',
      'background': '#FFFF'
    }
  }
]