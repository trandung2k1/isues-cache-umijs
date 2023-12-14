import { DEFAULT_NAME } from '@/constants';
import { useCallback, useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [filter, settFilter] = useState<any>({
    page: 1,
    size: 20,
    query: '',
  });

  const handleLoadData = useCallback(() => {
    console.log('load data', filter);
  }, [filter]);

  // const handleLoadData = () => {
  //   console.log("load data", filter)
  // }

  // cahe context function
  // const handleLoadData = useCallback(() => {
  //   console.log("load data", filter)
  // }, [])

  const handleSubmit = useCallback(() => {
    console.log(filter);
    handleLoadData();
  }, [filter]);

  return {
    name,
    setName,
    filter,
    settFilter,
    handleSubmit,
  };
};

export default useUser;
