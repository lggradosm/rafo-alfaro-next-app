import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  where,
  startAfter,
  getCountFromServer
} from 'firebase/firestore'
import { db } from '../config/firebase'

const col = collection(db, 'projects')

export const getLastProjects = async () => {
  const q = query(col, orderBy('created_at', 'desc'), limit(6))
  return await getDocs(q)
}

export const countProjects = async () => {
  const res = await getCountFromServer(col)
  return res.data().count
}

export const getProjectsPagination = async (date) => {
  const amount = 10
  const q = query(
    col,
    orderBy('created_at', 'desc'),
    startAfter(date),
    limit(amount)
  )
  const res = await getDocs(q)
  const data = res.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
  return data
}

export const getCover = async () => {
  const q = query(collection(db, 'projects_cover'))
  return await getDocs(q)
}

export const getProjectByUrl = async (url) => {
  const q = query(col, limit(1), where('url', '==', url))
  return await getDocs(q)
  // const res = await getDocs(q)
  // const data = res.docs.map((doc) => ({
  //   id: doc.id,
  //   ...doc.data()
  // }))
  // return data[0]
}
