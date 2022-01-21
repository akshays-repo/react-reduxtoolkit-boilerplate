import React from 'react';
import { Badge } from 'react-bootstrap';

const BadgeComponent = (props: { label: string | number; color?: string }) => (
  <Badge pill style={{ backgroundColor: props.color, marginBottom: '10px' }}>
    {props.label}
  </Badge>
);

export default BadgeComponent;
