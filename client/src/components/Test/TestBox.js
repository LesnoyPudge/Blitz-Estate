import { useState } from 'react';
import { TestBoxOption, ResultOutput } from '.';



export function TestBox() {
    const test = {
        length: 4,
        questions: [
            {
                id: 1,
                type: 'simple',
                label: 'Выберите местоположение объекта',
                options: [
                    {
                        label: 'В России',
                        image: 'test_step-1_option-1',
                        value: [
                            'https://cian.ru/cat.php?region=1&engine_version=2',
                            ''
                        ],
                        nextQuestionId: 2,
                    },
                    {
                        label: 'В Европе',
                        image: 'test_step-1_option-2',
                        value: [
                            '',
                            'https://prian.ru/search/?where%5B1%5D=%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B0&'
                        ],
                        nextQuestionId: 2,
                    },
                ]
            },
            {
                id: 2,
                type: 'simple',
                label: 'Выберите тип недвижимости',
                options: [
                    {
                        label: 'Жилая',
                        image: 'test_step-1_option-1',
                        value: [
                            '',
                            'parent=100'
                        ],
                        nextQuestionId: 3,
                    },
                    {
                        label: 'Коммерческая',
                        image: 'test_step-1_option-2',
                        value: [
                            'offer_type=offices',
                            'parent=16'
                        ],
                        nextQuestionId: 4,
                    },
                ]
            },
            {
                id: 3,
                type: 'simple',
                label: 'Выберите тип жилой недвижимости',
                options: [
                    {
                        label: 'Дом',
                        image: 'test_step-1_option-1',
                        value: [
                            'offer_type=suburban&object_type%5B0%5D=1',
                            'pobjects%5B%5D=31'
                        ],
                        nextQuestionId: 5,
                    },
                    {
                        label: 'Квартира',
                        image: 'test_step-1_option-2',
                        value: [
                            'offer_type=flat&object_type%5B0%5D=2',
                            'pobjects%5B%5D=15'
                        ],
                        nextQuestionId: 5,
                    },
                ]
            },
            {
                id: 4,
                type: 'complex',
                label: 'Выберите тип коммерческой недвижимости',
                options: [
                    {
                        label: 'Офис',
                        image: 'test_step-1_option-1',
                        value: [
                            'office_type%5B0%5D=1',
                            'objects%5B%5D=7'
                        ],
                        nextQuestionId: 5,
                    },
                    {
                        label: 'Склад',
                        image: 'test_step-1_option-2',
                        value: [
                            'office_type%5B0%5D=3',
                            'objects%5B%5D=8'
                        ],
                        nextQuestionId: 5,
                    },
                    {
                        label: 'Готовый бизнес',
                        image: 'test_step-1_option-2',
                        value: [
                            'office_type%5B1%5D=10',
                            'objects%5B%5D=13'
                        ],
                        nextQuestionId: 5,
                    },
                    {
                        label: 'Производство',
                        image: 'test_step-1_option-2',
                        value: [
                            'office_type%5B0%5D=7',
                            'objects%5B%5D=8'
                        ],
                        nextQuestionId: 5,
                    },
                ]
            },
            {
                id: 5,
                type: 'simple',
                label: 'Выберите способ оплаты',
                options: [
                    {
                        label: 'Покупка',
                        image: 'test_step-1_option-1',
                        value: [
                            'deal_type=sale',
                            'type%5B%5D=1'
                        ],
                        nextQuestionId: null,
                    },
                    {
                        label: 'Аренда',
                        image: 'test_step-1_option-2',
                        value: [
                            'deal_type=rent',
                            'type%5B%5D=2'
                        ],
                        nextQuestionId: null,
                    },
                ]
            },
        ],
    };
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
    const [history, setHistory] = useState([]);
    const [way, setWay] = useState(null);



    function nextQuestion() {
        setIsAnimating(true);
        setSelectedOption(null);
        setHistory(arr => [...arr, test.questions[nextQuestionIndex].id]);
        setAnswers(arr => [...arr, test.questions[nextQuestionIndex].options[selectedOption].value]);
        defineWay();

        setTimeout(() => {
            setNextQuestionIndex(
                findIndexById(test.questions[nextQuestionIndex].options[selectedOption].nextQuestionId)
            );
            setCurrentStep(currentStep + 1);
            setIsAnimating(false);
        }, 300); 
    }

    function prevQuestion() {
        setIsAnimating(true);
        setSelectedOption(null);
        setHistory(history.slice(0, -1));
        setAnswers(answers.slice(0, -1));
 
        setTimeout(() => {
            setNextQuestionIndex(findIndexById(history[history.length - 1]));
            setCurrentStep(currentStep - 1);
            setIsAnimating(false);
        }, 300); 
    }

    function testReset() {
        setIsAnimating(true);
        setSelectedOption(null);
        setHistory([]);
        setAnswers([]);

        setTimeout(() => {
            setNextQuestionIndex(0);
            setCurrentStep(0);
            setIsAnimating(false);
        }, 300); 
    }

    function findIndexById(id) {
        if (id === null) return 0;

        return test.questions.findIndex((element) => {
            return (element === (
                test.questions.filter((question) => { 
                    return (question.id === id);
                }).reduce((obj) => {
                    return Object.assign({}, obj)
                })
            ));
        });
    }

    function defineWay() {
        if (currentStep !== 0) return;

        setWay(selectedOption);
    }

    return (
        <div className="test__test-box test-box">
            <div className="test-box__inner">
                <div className={"test-box__content" + ((isAnimating) ? ' test-box__content--animate' : '')}>
                    {
                        (currentStep === test.length) ?
                            <ResultOutput
                                answers={answers}
                                way={way}
                            />
                        :
                        (test.questions[nextQuestionIndex]) ?
                            <div className="test-box__item">
                                <h5 className="test-box__item-title">
                                    {test.questions[nextQuestionIndex].label}
                                </h5>

                                <div 
                                    className={
                                        "test-box__item-select" + 
                                        ((test.questions[nextQuestionIndex].type === 'complex') ?
                                            ' test-box__item-select--complex'
                                        :
                                        '')
                                    }
                                >
                                    {
                                        test.questions[nextQuestionIndex].options.map((option, index) => {
                                            return (
                                                <TestBoxOption
                                                    key={index}
                                                    option={option}
                                                    isActive={selectedOption === index}
                                                    onClick={() => {setSelectedOption(index)}}
                                                    onDoubleClick={nextQuestion}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        :
                        null
                    }
                </div>
            </div>
        
            <div className="test-box__control">
                <div className="test-box__progress">
                    Вы ответили на: <span>{currentStep}</span>/<span>{test.length}</span> вопросов
                </div>
                <div className="test-box__buttons">
                    <button 
                        className="test-box__prev-button button" 
                        type="button" 
                        disabled={currentStep === 0}
                        onClick={prevQuestion}
                    >
                        {/*<span style={{fontSize: '2.2rem', lineHeight: '0', display: 'inline-block'}}>&#8592;</span>*/} Назад
                    </button>
                    
                    {
                        (currentStep === test.length) ?
                            <button 
                                className="test-box__again-button button" 
                                type="button"
                                onClick={testReset}
                            >
                                Пройти заново {/*<span style={{fontSize: '2.2rem', lineHeight: '0', display: 'inline-block'}}>&#8635;</span>*/}
                            </button>
                        :
                        <button 
                            className="test-box__next-button button" 
                            type="button" 
                            disabled={(selectedOption !== null) ? false : true}
                            onClick={nextQuestion}
                        >
                            {
                                (currentStep === test.length - 1) ?
                                    'Посмотреть результаты'
                                :
                                <>
                                    Продолжить&nbsp;
                                    {/*<span style={{fontSize: '2.2rem', lineHeight: '0', display: 'inline-block'}}>&#8594;</span>*/}
                                </>
                            }
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}