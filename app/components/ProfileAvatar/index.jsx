import React from 'react';
import { MuiBox, MuiIconButton } from 'components';
import { Avatar } from '@mui/material';
import AvatarImg from 'images/avatar.png';
import { CameraAltIcon, DeleteIcon } from 'helpers/Icons';

export default function ProfileAvatar(props) {

  const { disabled } = props;

  return (

    <MuiBox className='profileAvatarWrap' sx={{ width: 'fit-content', pointerEvents: disabled ? 'none' : 'inherit', }}>
      <input accept="image/*" id="icon-button-file" type="file" hidden />
      <label htmlFor="icon-button-file" className='profileAvatarLabel'>
        <MuiIconButton color="primary" aria-label="upload picture" component="span" style={{
          padding: 0,
        }}>
          <Avatar src={AvatarImg} sx={{
            width: 150,
            height: 150,
          }} />
          <MuiBox className='overlayBox'>
            <CameraAltIcon />
          </MuiBox>
          <MuiIconButton className='removeBtn'>
            <DeleteIcon />
          </MuiIconButton>
        </MuiIconButton>
      </label>
    </MuiBox>
  );
}