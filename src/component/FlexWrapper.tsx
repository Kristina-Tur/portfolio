import styled from 'styled-components';

type FlexWrapperPropsType = {
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
    minHeight?: string
    rowGap?: string
    columnGap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-wrap: ${props => props.flexWrap || 'no-wrap'};
  height: ${props => props.minHeight || undefined};
  row-gap: ${props => props.rowGap || undefined};
  column-gap: ${props => props.columnGap || undefined};  
`
