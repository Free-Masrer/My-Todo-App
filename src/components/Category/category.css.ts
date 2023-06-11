import { vars } from '../../assets/styles/vars.css';
import { style } from '@vanilla-extract/css';


export const taskAmountStyle = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  minWidth: '30px',
  minHeight: '30px',
  borderRadius: '10px',
  border: vars.border.presets.default,
  borderColor: vars.colors.border,
  color: vars.colors.textSecondary,
  backgroundColor: vars.colors.secondary,
});

