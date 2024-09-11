import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Car, Facebook, Instagram, Twitter, Users } from 'lucide-react';

export default function CarRentalInfo() {
	return (
		<div className='min-h-screen bg-gray-50'>
			<header className='bg-white shadow'>
				<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
					<h1 className='text-3xl font-bold text-gray-900 flex items-center'>
						<Car className='mr-2' /> SpeedyWheels Rentals
					</h1>
					<nav className='flex space-x-4'>
						<Button variant='ghost'>Home</Button>
						<Button variant='ghost'>Vehicles</Button>
						<Button variant='ghost'>Locations</Button>
						<Button variant='ghost'>Contact</Button>
					</nav>
				</div>
			</header>

			<main className='max-w-7xl mx-auto py-12 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
						Your Journey, Our Wheels
					</h2>
					<p className='mt-5 max-w-xl mx-auto text-xl text-gray-500'>
						At SpeedyWheels Rentals, we're committed to providing you with the
						best vehicles and service for your travel needs.
					</p>
				</div>

				<Tabs defaultValue='about' className='w-full'>
					<TabsList className='grid w-full grid-cols-4'>
						<TabsTrigger value='about'>About Us</TabsTrigger>
						<TabsTrigger value='fleet'>Our Fleet</TabsTrigger>
						<TabsTrigger value='locations'>Locations</TabsTrigger>
						<TabsTrigger value='testimonials'>Testimonials</TabsTrigger>
					</TabsList>
					<TabsContent value='about'>
						<Card>
							<CardHeader>
								<CardTitle>About SpeedyWheels Rentals</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-700 mb-4'>
									Founded in 2005, SpeedyWheels Rentals has been providing
									top-notch car rental services for over 15 years. We started
									with a small fleet of 10 cars in downtown Metro City and have
									since grown to become one of the leading car rental companies
									in the country.
								</p>
								<p className='text-gray-700 mb-4'>
									Our mission is to make car rental easy, affordable, and
									enjoyable for all our customers. Whether you're a business
									traveler, a family on vacation, or just need a temporary ride,
									we've got you covered with our diverse fleet of vehicles and
									flexible rental options.
								</p>
								<p className='text-gray-700'>
									At SpeedyWheels, we pride ourselves on our commitment to
									customer satisfaction, vehicle safety, and environmental
									responsibility. Our fleet includes fuel-efficient and electric
									vehicles, and we're constantly updating our selection to
									provide you with the latest models and features.
								</p>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value='fleet'>
						<Card>
							<CardHeader>
								<CardTitle>Our Fleet</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
									{[
										{
											name: 'Economy',
											description: 'Fuel-efficient compact cars',
											image: '/placeholder.svg',
										},
										{
											name: 'Midsize',
											description: 'Comfortable sedans for longer trips',
											image: '/placeholder.svg',
										},
										{
											name: 'SUV',
											description: 'Spacious vehicles for family adventures',
											image: '/placeholder.svg',
										},
										{
											name: 'Luxury',
											description: 'Premium cars for a touch of elegance',
											image: '/placeholder.svg',
										},
										{
											name: 'Electric',
											description: 'Eco-friendly options for green travelers',
											image: '/placeholder.svg',
										},
										{
											name: 'Vans',
											description: 'Ideal for group travel or moving',
											image: '/placeholder.svg',
										},
									].map((category, index) => (
										<Card key={index}>
											<CardContent className='p-4'>
												<img
													src={category.image}
													alt={category.name}
													className='w-full h-40 object-cover rounded-md mb-4'
												/>
												<h3 className='text-lg font-semibold mb-2'>
													{category.name}
												</h3>
												<p className='text-sm text-gray-600'>
													{category.description}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value='locations'>
						<Card>
							<CardHeader>
								<CardTitle>Our Locations</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
									{[
										{
											city: 'Metro City',
											address: '123 Main St, Metro City, MC 12345',
											phone: '(555) 123-4567',
										},
										{
											city: 'Coastal Town',
											address: '456 Beach Rd, Coastal Town, CT 67890',
											phone: '(555) 987-6543',
										},
										{
											city: 'Mountain View',
											address: '789 Peak Ave, Mountain View, MV 54321',
											phone: '(555) 246-8135',
										},
										{
											city: 'Lakeside',
											address: '321 Shore Dr, Lakeside, LS 98765',
											phone: '(555) 369-2580',
										},
										{
											city: 'Desert Oasis',
											address: '654 Cactus Ln, Desert Oasis, DO 13579',
											phone: '(555) 785-4120',
										},
										{
											city: 'Forest Hills',
											address: '987 Pine St, Forest Hills, FH 24680',
											phone: '(555) 951-7530',
										},
									].map((location, index) => (
										<Card key={index}>
											<CardContent className='p-4'>
												<h3 className='text-lg font-semibold mb-2'>
													{location.city}
												</h3>
												<p className='text-sm text-gray-600 mb-2'>
													{location.address}
												</p>
												<p className='text-sm text-gray-600'>
													{location.phone}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value='testimonials'>
						<Card>
							<CardHeader>
								<CardTitle>Customer Testimonials</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-6'>
									{[
										{
											name: 'Sarah L.',
											comment:
												'SpeedyWheels made our family vacation a breeze! The SUV we rented was clean, comfortable, and perfect for our road trip.',
											rating: 5,
										},
										{
											name: 'John D.',
											comment:
												'As a business traveler, I appreciate the efficiency and professionalism of SpeedyWheels. Their airport location is so convenient!',
											rating: 4,
										},
										{
											name: 'Emma W.',
											comment:
												'I rented an electric car for a weekend getaway, and it was a fantastic experience. The staff was knowledgeable and helpful.',
											rating: 5,
										},
									].map((testimonial, index) => (
										<div key={index} className='flex items-start space-x-4'>
											<Avatar>
												<AvatarFallback>{testimonial.name[0]}</AvatarFallback>
											</Avatar>
											<div>
												<h3 className='font-semibold'>{testimonial.name}</h3>
												<p className='text-sm text-gray-600 mt-1'>
													{testimonial.comment}
												</p>
												<div className='flex items-center mt-2'>
													{[...Array(testimonial.rating)].map((_, i) => (
														<svg
															key={i}
															className='w-4 h-4 text-yellow-500 fill-current'
															viewBox='0 0 24 24'
														>
															<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
														</svg>
													))}
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				<div className='mt-16'>
					<h3 className='text-2xl font-bold text-gray-900 mb-8'>
						Why Choose SpeedyWheels?
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<Card>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<Car className='w-8 h-8 text-blue-500 mr-3' />
									<h4 className='text-lg font-semibold'>Wide Selection</h4>
								</div>
								<p className='text-gray-600'>
									From compact cars to luxury vehicles, we have the perfect ride
									for every occasion.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<Award className='w-8 h-8 text-green-500 mr-3' />
									<h4 className='text-lg font-semibold'>Quality Assurance</h4>
								</div>
								<p className='text-gray-600'>
									All our vehicles undergo rigorous maintenance checks for your
									safety and comfort.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<Users className='w-8 h-8 text-purple-500 mr-3' />
									<h4 className='text-lg font-semibold'>Exceptional Service</h4>
								</div>
								<p className='text-gray-600'>
									Our friendly staff is dedicated to providing you with the best
									rental experience.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>

			<footer className='bg-gray-800 text-white mt-16'>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						<div>
							<h4 className='text-lg font-semibold mb-4'>Company</h4>
							<ul className='space-y-2'>
								<li>
									<a href='#' className='hover:underline'>
										About Us
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Careers
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Press
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='text-lg font-semibold mb-4'>Rentals</h4>
							<ul className='space-y-2'>
								<li>
									<a href='#' className='hover:underline'>
										Car Types
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Locations
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Special Offers
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='text-lg font-semibold mb-4'>Resources</h4>
							<ul className='space-y-2'>
								<li>
									<a href='#' className='hover:underline'>
										FAQs
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Rental Policies
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Insurance
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='text-lg font-semibold mb-4'>Contact</h4>
							<ul className='space-y-2'>
								<li>
									<a href='#' className='hover:underline'>
										Customer Support
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Roadside Assistance
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Feedback
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='mt-8 border-t border-gray-700 pt-8 flex items-center justify-between'>
						<p className='text-sm'>
							&copy; 2023 SpeedyWheels Rentals. All rights reserved.
						</p>
						<div className='flex space-x-6'>
							<a href='#' className='text-gray-400 hover:text-white'>
								<span className='sr-only'>Facebook</span>
								<Facebook className='h-6 w-6' />
							</a>
							<a href='#' className='text-gray-400 hover:text-white'>
								<span className='sr-only'>Instagram</span>
								<Instagram className='h-6 w-6' />
							</a>
							<a href='#' className='text-gray-400 hover:text-white'>
								<span className='sr-only'>Twitter</span>
								<Twitter className='h-6 w-6' />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
