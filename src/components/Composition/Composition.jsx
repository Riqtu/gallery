import { useCallback, useEffect } from 'react'
import useContentful from '../../api/useContentful'
import {
  CompositionWrapper,
  Header,
  ImageBlock,
  StyledLink,
} from './Composition.styles'
import logo from './../../assets/logoMini.svg'
import { Children } from 'react'
import { useHistory } from 'react-router'

const Composition = (props) => {
  const history = useHistory()
  const handleOnClick = useCallback(
    (id) => history.push(`/${props.name}/${id}`),
    [history, props.name]
  )
  const { getData, data } = useContentful()

  useEffect(() => {
    getData({ name: props.name })
    // eslint-disable-next-line
  }, [])
  return (
    <CompositionWrapper>
      <Header>
        <div>
          <h1>{props.title}</h1>
          <img src={logo} alt="" />
        </div>
        <StyledLink to="/">На главную</StyledLink>
      </Header>
      {data.postersData &&
        Children.toArray(
          data.postersData.map((el) => (
            <ImageBlock
              onClick={() => {
                // setModalData(el)
                // setModalActive(true)
                handleOnClick(el.sys.id)
              }}
            >
              <img src={'https:' + el.fields.file.fields.file.url} alt="" />
              <h1>{el.fields.title}</h1>
            </ImageBlock>
          ))
        )}
    </CompositionWrapper>
  )
}

export default Composition
