import ModalButton from "../ModalInputItem/ModalButton";
import ModalSelectItem from "../ModalInputItem/ModalSelectItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import { useState } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks";
import { studyActions } from '../../../store/study';
import type { ModalFunctionProps } from "../ModalWrapper/Modal";
import type { SetStudyDataPayload } from '../../../store/study';

export default function StudyDeleteModal({ ClickQuitHandler }: ModalFunctionProps) {
    const studyValue = useAppSelector(state => state.study)

    const dispatch = useAppDispatch()

    const [selectedStudyId, setSelectedtudyId] = useState<string>('')

    const ClickStudyHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedtudyId(e.target!.value)
    }

    const ClickDeleteHandler = async (): Promise<any> => {
        if (window.confirm('삭제하시겠습니까?')) {
            const result = await axios({
                method: 'DELETE',
                url: '${process.env.REACT_APP_BASE_URL}/delete',
                data: {
                    id: selectedStudyId
                }
            })

            if (result.data.result) {
                const payload: SetStudyDataPayload = { studies: result.data.data }
                dispatch(studyActions.SetStudyData(payload))
            }

            ClickQuitHandler()
        }
    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>스터디 삭제</ModalTitle>
                <ModalSelectItem name={'이름'} onChange={ClickStudyHandler}>
                    <option value={""}>선택</option>
                    {
                        studyValue.map(study => <option key={study.id} value={study.id}>{study.name}</option>)
                    }
                </ModalSelectItem>
            </ModalContentContainer>
            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
                {
                    selectedStudyId.trim().length ? <ModalButton onClick={ClickDeleteHandler}>삭제하기</ModalButton> : null
                }
            </ModalButtonsContainer>
        </>
    )
}