
import Contact from '@/components/contact';

export const metadata = {
	description:
		'BMW ve MINI otomobilleriniz için orijinal ve yüksek kaliteli yedek parçalar ve aksesuarlar. Geniş ürün yelpazemizle sizlere hizmet veriyoruz',
};

function page() {
	return (
		<main className="icerik">
			<Contact />
		</main>
	);
}

export default page;
