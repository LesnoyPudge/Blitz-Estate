// import { useCallback, useEffect, useState } from "react";
// import { useHttp } from "../../hooks/http.hook";
// import { Loader } from "..";
// import { ResultOutputItem } from ".";



export function ResultOutput({answers, way}) {
    // const {request, isLoading} = useHttp();
    // const [result, setResult] = useState(null);
    const url = answers.map((answer) => { return answer[way] }).join('&');



    // const fetchResult = useCallback(async () => {
    //     try {
    //         const response = await request('./api/parse/', 'POST', {url}, {});

    //         setResult(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [request, url]);
    
    // useEffect(() => {
    //     fetchResult();
    // }, [fetchResult]);

    return (
        <div className="test-box__result-output result-output">
            {/* {
                (isLoading) ?
                    <Loader/>
                :
                (result) ?
                    (result.length) ?
                        <ul className="result-output__list">
                            {
                                result.map((item, index) => {
                                    return (
                                        <ResultOutputItem
                                            key={index}
                                            item={item}
                                        />
                                    );
                                })
                            }
                        </ul>
                    :
                    'Данные не найдены'
                :
                'кнопка повторить загрузку'
            } */}

            <a 
                className='result-output__link button'
                href={url} 
                target='_blank'
                rel="noreferrer"
            >
                Результаты
            </a>
        </div>
    );
}