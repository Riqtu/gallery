import { useCallback, useEffect, useState } from 'react'
import useContentful from '../../api/useContentful'
import {
  AccessoriesWrapper,
  Block,
  BlockWrapper,
  Header,
  ImageBlock,
  StyledLink,
} from './Accessories.styles'
import logo from './../../assets/logoMini.svg'
import { Children } from 'react'
import { useHistory } from 'react-router'

const Accessories = (props) => {
  const history = useHistory()
  const [arr, setArr] = useState([])
  const handleOnClick = useCallback(
    (id) => history.push(`/${props.name}/${id}`),
    [history, props.name]
  )
  const { getData, data } = useContentful()

  useEffect(() => {
    getData({ name: props.name })
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    const keys = []
    data.postersData?.forEach((el, index) => {
      if (keys.filter((a) => a.key === el.fields.title).length === 0) {
        keys.push({ key: el.fields.title, arr: [el] })
      } else {
        keys[keys.findIndex((a) => a.key === el.fields.title)].arr.unshift(el)
      }
    })
    setArr(keys)
  }, [data.postersData])
  return (
    <AccessoriesWrapper>
      <Header>
        <div>
          <h1>{props.title}</h1>
          <img src={logo} alt="" />
        </div>
        <StyledLink to="/">На главную</StyledLink>
      </Header>
      <BlockWrapper>
        {Children.toArray(
          arr.map((el) => (
            <>
              <h1>{el.key}</h1>

              <Block>
                {el.arr.map((img) => (
                  <ImageBlock
                    onClick={() => {
                      handleOnClick(img.sys.id)
                    }}
                  >
                    <img
                      src={'https:' + img.fields.file.fields.file.url}
                      alt=""
                    />
                  </ImageBlock>
                ))}
              </Block>
            </>
          ))
        )}
      </BlockWrapper>
    </AccessoriesWrapper>
  )
}

export default Accessories
