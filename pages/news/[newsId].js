import {useRouter} from 'next/router';

// our-domain.com/news/something-important

function DetailsPage() {
	const router = useRouter();
	const newsId = router.query.newsId;

	return <h1>Details Page</h1>
}

export default DetailsPage;