import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHooks"
import { useEffect } from "react"
import { studyData } from "../../DummyData/studyData"
import { studyActions } from "../../store/study"
import type { SetStudyDataPayload } from "../../store/study"

export default function StudyPage() {

    const dispatch = useAppDispatch()
    const studyValue = useAppSelector(state => state.study)

    // todos : DB연결 후 restAPI로 변경
    useEffect(() => {
        const payload: SetStudyDataPayload = { studies: studyData }
        dispatch(studyActions.SetStudyData(payload))
    }, [dispatch])

    return (
        <>
            <ul>
                {
                    studyValue.map(study => {
                        return (
                            <Link to={`/study/${study.id}/main`} key={study.id}>
                                <li >
                                    <h1>{study.name}</h1>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </>
    )
}