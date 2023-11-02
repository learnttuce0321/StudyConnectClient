import ModalTextInputItem from '../ModalInputItem/ModalTextInputItem'
import ModalSelectItem from '../ModalInputItem/ModalSelectItem'
import ModalTitle from '../ModalInputItem/ModalTitle'
import ModalContentContainer from '../ModalWrapper/ModalContentContainer'
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer'
import ModalButton from '../ModalInputItem/ModalButton'
import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { filteredUserActions } from '../../../store/filteredUser'
import type { User } from '../../../store/user'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'

export default function UserFindModal({ ClickQuitHandler }: ModalFunctionProps) {
    const userValue = useAppSelector(state => state.user)

    const dispatch = useAppDispatch()

    const searchTypeRef = useRef<HTMLSelectElement>(null)
    const searchSexRef = useRef<HTMLSelectElement>(null)
    const searchRef = useRef<HTMLInputElement>(null)

    const SearchClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const typeInput = searchTypeRef.current
        const searchInput = searchRef.current
        const sexInput = searchSexRef.current

        let tempFilteredUser: Array<User>

        switch (typeInput!.value) {
            case 'name':
                tempFilteredUser = userValue.filter(user => {
                    const filteringCondition = user.name.includes(searchInput!.value) && (sexInput!.value === 'all' || user.sex === sexInput!.value)
                    return filteringCondition
                })

                dispatch(filteredUserActions.setFilteredUser({ filteredUser: tempFilteredUser, isFiltering: true }))
                break;

            case 'number':
                tempFilteredUser = userValue.filter(user => {
                    const filteringCondition = user.phone.includes(searchInput!.value) && (sexInput!.value === 'all' || user.sex === sexInput!.value)
                    return filteringCondition
                })

                dispatch(filteredUserActions.setFilteredUser({ filteredUser: tempFilteredUser, isFiltering: true }))
                break;
        }

        ClickQuitHandler()
    }


    return (
        <>
            <ModalContentContainer>
                <ModalTitle>검색</ModalTitle>
                <ModalSelectItem ref={searchTypeRef} name={'종류'}>
                    <option value="name">이름</option>
                    <option value="number">번호</option>
                </ModalSelectItem>

                <ModalTextInputItem name={'검색'} ref={searchRef} />

                <ModalSelectItem ref={searchSexRef} name={'성별'}>
                    <option value="all">전체</option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </ModalSelectItem>
            </ModalContentContainer>
            <ModalButtonsContainer>
                <ModalButton onClick={SearchClickHandler}>조회</ModalButton>
            </ModalButtonsContainer>

        </>
    )
}