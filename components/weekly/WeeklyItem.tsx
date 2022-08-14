import React, { useEffect, useState, useRef, useCallback } from 'react';
import { dayOfWeekEn } from '../../utils/dayOfWeek';
import * as S from './WeeklyItem.style';

type WeeklyItemProps = {
  day: Days;
  tasks?: Task[];
};

type InputData = {
  text: string;
  type: string;
  checked: boolean;
};

const WeekItem = ({ day }: WeeklyItemProps) => {
  const [inputData, setInputData] = useState<InputData[]>([
    { text: '', type: 'input', checked: false },
  ]);
  const [focusId, setFocusId] = useState(0);
  const [inputText, setInputText] = useState<string>('');
  const [isFocus, setFocus] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus) inputRef.current?.focus();
  }, [isFocus, focusId]);

  const addInputHandler = useCallback(() => {
    setInputData(
      inputData.concat({
        text: '',
        type: 'input',
        checked: false,
      })
    );
    setFocusId(focusId + 1);
  }, [focusId, inputData]);

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  // inputData 의 데이터 정보 변경
  const changeData = useCallback(() => {
    inputData[focusId] = {
      ...inputData[focusId],
      text: inputText,
      type: 'item',
    };
    setInputText('');
    addInputHandler();
    setFocus(true);
  }, [addInputHandler, focusId, inputData, inputText]);

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter' && inputText !== '') {
        changeData();
      }
    },
    [inputText, changeData]
  );

  const onBlurInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (inputText !== '') {
        changeData();
      }
    },
    [changeData, inputText]
  );

  const onClickBody = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    inputRef.current?.focus();
    setFocus(true);
  }, []);

  return (
    <S.WeeklyItemContainer>
      <S.WeeklyItemHeader isToday={day.isToday ? true : false}>
        <S.WeeklyItemDate>{day.date}</S.WeeklyItemDate>
        <S.WeeklyItemDay>{dayOfWeekEn[day.day]}</S.WeeklyItemDay>
      </S.WeeklyItemHeader>
      <S.WeeklyItemBody>
        <S.WeeklyList onClick={onClickBody}>
          {inputData.map((data, i) => (
            <S.WeeklyInputBox key={i}>
              <>
                {data.type === 'input' ? (
                  <S.TodoInputItem
                    type="text"
                    ref={inputRef}
                    onChange={onChangeInput}
                    onBlur={onBlurInput}
                    onKeyPress={onKeyPress}
                    autoComplete="none"
                    // autoFocus
                  />
                ) : (
                  <S.TodoItemBox>
                    <span>{data.text}</span>
                  </S.TodoItemBox>
                )}
              </>
            </S.WeeklyInputBox>
          ))}
        </S.WeeklyList>
      </S.WeeklyItemBody>
    </S.WeeklyItemContainer>
  );
};

export default WeekItem;
