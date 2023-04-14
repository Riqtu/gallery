import { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import useContentful from '../../api/useContentful'
import {
  Container,
  DescriptionWrapper,
  ExitButton,
  ImageWrapper,
  ModalElWrapper,
} from './ModalEl.styles'

const ModalEl = (props) => {
  let { id, typeName } = useParams()

  const history = useHistory()
  const handleOnClick = useCallback(
    (id) => history.push(`/${typeName}`),
    [history, typeName]
  )

  const { getDataById, dataById } = useContentful()
  // const [modalActive, setModalActive] = useState(false)
  const [imageData, setImageData] = useState({})
  useEffect(() => {
    getDataById({ id: id })
    // eslint-disable-next-line
  }, [id])
  useEffect(() => {
    dataById && setImageData(dataById.fields.file.fields.file.details.image)
  }, [dataById])
  return (
    <ModalElWrapper active={true}>
      {dataById && (
        <>
          <ExitButton onClick={handleOnClick}>Назад</ExitButton>
          <Container>
            <ImageWrapper resize={imageData.height / imageData.width > 1.4}>
              <img
                src={'https:' + dataById.fields.file.fields.file.url}
                alt=""
              />
            </ImageWrapper>
            <DescriptionWrapper>
              <span>Название</span>
              <text>{dataById.fields.title}</text>
              {dataById.fields.description && (
                <>
                  <span>Материалы</span>
                  <text>{dataById.fields.description}</text>{' '}
                </>
              )}
              <span>Размеры</span>
              <text>
                {dataById.fields.size
                  ? dataById.fields.size
                  : 'Размеры не указаны'}
              </text>

              {dataById.fields.price && (
                <>
                  <span>Цена</span>
                  <text>{dataById.fields.price}</text>
                </>
              )}
              <span>Купить</span>
              <text>
                <a href="https://instagram.com/polinashustovaart">
                  inst: @polinashustovaart
                </a>
                <br />
                <a href="tel:+79185547940"> Tel: +79185547940</a> <br />
                Ростов на Дону <br />
                Пр. Стачки 171 <br />
                3 этаж - Фотосалон О. Возлюбленной <br />
              </text>
            </DescriptionWrapper>
          </Container>
        </>
      )}
    </ModalElWrapper>
  )
}

export default ModalEl
