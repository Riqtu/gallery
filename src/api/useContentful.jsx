import { useState } from 'react'

const useContentful = () => {
  const [data, setData] = useState({})
  const [dataById, setDataById] = useState()

  const contentful = require('contentful')
  const client = contentful.createClient({
    space: 'a5m9sfy31eyk',
    accessToken: 'E2Qt3j-Cn_5Ze_Nlje9mKMPYhHV2x1VXyZKwAVBEDAw',
  })

  const getData = async (param) => {
    await client
      .getEntries({
        content_type: param.name,
        order: 'fields.description' && '-sys.updatedAt',
      })
      .then((entry) => {
        setData({ ...data, postersData: entry.items })
      })
      .catch((err) => console.log(err))
  }
  const getDataById = async (param) => {
    console.log(param)
    await client
      .getEntry(param.id)
      .then((entry) => {
        setDataById(entry)
      })
      .catch((err) => console.log(err))
  }
  return { getData, data, dataById, getDataById }
}

export default useContentful
