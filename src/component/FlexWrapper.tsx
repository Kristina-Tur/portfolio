import styled from 'styled-components';
import {CSSProperties} from 'react';

type FlexWrapperPropsType = {
    flexDirection?: CSSProperties['flexDirection'] //вместо string, тогда свойства будут подсказываться
    /*flexDirection?: string*/
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
    rowGap?: string
    columnGap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-wrap: ${props => props.flexWrap || 'no-wrap'};
  row-gap: ${props => props.rowGap || undefined};
  column-gap: ${props => props.columnGap || undefined};  
`
