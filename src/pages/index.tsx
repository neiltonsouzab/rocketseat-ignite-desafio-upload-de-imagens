import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = null }) => {
      const response = await api.get(`/api/images`, {
        params: {
          after: pageParam,
        },
      });

      return response.data;
    },
    {
      getNextPageParam: ({ _, after }) => {
        if (after) {
          return after;
        }

        return null;
      },
    }
  );

  const formattedData = useMemo(() => {
    return data && data.pages.map(item => item.data).flat();
  }, [data]);

  async function handleLoadMore(): Promise<void> {
    await fetchNextPage();
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage && (
          <Button marginTop="24px" onClick={() => handleLoadMore()}>
            {isFetchingNextPage ? 'Carregando' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}
