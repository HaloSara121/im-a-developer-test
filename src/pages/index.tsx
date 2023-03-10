import Head from 'next/head'

import {
  Flex,
  Text,
  Image,
  Heading,
  Divider,
  Icon,
  Button,
} from '@chakra-ui/react'

import { CaretLeft, CaretRight } from 'phosphor-react'
import { FaQuoteLeft } from 'react-icons/fa'
import { useState } from 'react'

type Testimonial = {
  name: string
  text: string
}

export default function Home() {
  const [currentTestimonial, setCurrentTestmonial] = useState<number>(0)

  const testimonials: Testimonial[] = [
    {
      name: 'Vinicius Paes Berna',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod distinctio ipsa corrupti, fugiat vel consequuntur voluptates corporis quos, in ipsam neque blanditiis suscipit doloribus illum perspiciatis, harum tempore rem!',
    },
    {
      name: 'João Marcelo Pereira',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates nisi saepe neque veniam illo iusto mollitia. Iusto, aspernatur quis necessitatibus, tempore deserunt magnam incidunt ullam eum saepe aperiam reprehenderit.',
    },
    {
      name: 'Mateus Braz da Silva',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptas tempore laborum, corporis sequi quidem exercitationem incidunt rem quas ducimus iure temporibus explicabo. Non aliquid sequi, sit cupiditate repudiandae autem!',
    },
  ]

  const nextTestimonial = () => {
    if (currentTestimonial < testimonials.length) {
      setCurrentTestmonial((state) => state + 1)
    }
  }

  const priviousTestimonial = () => {
    if (currentTestimonial > 0) {
      setCurrentTestmonial((state) => state - 1)
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <title>Testimonials | Im a developer</title>
      </Head>
      <Flex as="main" flex="1">
        <Flex
          display={['none', 'none', 'none', 'flex']}
          bg="gray.700"
          color="gray.50"
          as="aside"
          py="1rem"
          w="5rem"
          h="100vh"
        />

        <Flex
          w="100%"
          h="100vh"
          bg="url('./bg.svg') no-repeat"
          bgSize="cover"
          justify="center"
          align="center"
          px="4"
          flexDir={['column', 'column', 'column', 'row']}
        >
          <Image src="./astronaut.png" w="50rem" m="-3rem" alt="" />

          <Flex flexDir="column">
            <Flex flexDir="column" align="flex-start">
              <Heading
                fontFamily="Bebas Neue"
                letterSpacing="widest"
                fontSize="5xl"
                color="blue.700"
              >
                Testimonials
              </Heading>

              <Divider
                w="17rem"
                borderWidth="1px"
                mt=".5rem"
                borderColor="gray.400"
              />
            </Flex>

            <Flex flexDir="column" mt="4rem">
              <Icon as={FaQuoteLeft} color="blue.700" fontSize="2xl" />

              <Text
                maxW="40rem"
                fontWeight="medium"
                fontSize="xl"
                mt="1rem"
                color="gray.600"
              >
                {`"${testimonials[currentTestimonial].text}"`}
              </Text>

              <Text
                maxW="40rem"
                fontFamily="Bebas Neue"
                letterSpacing="widest"
                fontWeight="bold"
                fontSize="2xl"
                mt="1rem"
                color="blue.700"
              >
                - {testimonials[currentTestimonial].name}
              </Text>

              <Flex mt="2rem" gap="1rem" justify="center" align="center">
                <Divider borderWidth="1px" borderColor="gray.400" />

                <Flex gap=".5rem">
                  <Button
                    colorScheme="cyan"
                    rounded="full"
                    disabled={currentTestimonial === 0}
                    p="0"
                    onClick={priviousTestimonial}
                  >
                    <CaretLeft weight="bold" />
                  </Button>

                  <Button
                    colorScheme="cyan"
                    rounded="full"
                    disabled={currentTestimonial === testimonials.length - 1}
                    p="0"
                    onClick={nextTestimonial}
                  >
                    <CaretRight weight="bold" />
                  </Button>
                </Flex>

                <Divider borderWidth="1px" borderColor="gray.400" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
