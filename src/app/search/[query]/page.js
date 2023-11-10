import React from "react";
import Link from "next/link";
import Script from "next/script";
import { getProjects, getResults } from "../../../../sanity/schemas/sanity-utils";
import Image from "next/image";
import { Container, Box, Grid } from "../../../../src/app/lib/mui";

const numTxt = {
    fontSize: '60px',
    color: '#276df2',
    lineHeight: '68px',
    margin: '0px',
    '@media (max-width: 991px)': {
        fontSize: '40px'
    }
}

const mainTxt = {
    fontSize: '30px',
    color: '#333',
    lineHeight: '34px',
    marginTop: '30px',
    ml: 3,
    '@media (max-width: 991px)': {
        fontSize: '20px',
        marginTop: '20px',
        ml: 2
    }
}

const readMore = {
    fontSize: '15px',
    fontWeight: '800',
    color: '#276df2',
    lineHeight: '23px',
    marginInline: '0px',
    cursor: 'pointer'
}

const rotateTxt = {
    fontSize: '30px',
    lineHeight: '38px',
    fontWeight: '800',
    transform: 'rotate(-90deg)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const leftContent = {
    width: 'calc(50% + 600px)',
    marginLeft: 'calc(50% - 600px)',
    marginTop: '50px',
    boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)',
    paddingTop: '30px',
    paddingBottom: '30px',
    position: 'relative',
    '@media (max-width: 1200px)': {
        width: '100%',
        marginLeft: '0px'
    }
}

const leftContentTxt = {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '26px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '30px'
}

const homepageContentTxt = {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '26px',
    '@media (max-width: 991px)': {
        fontSize: '12px',
        lineHeight: '20px'
    }
}

export default async function Blog({ params }) {
    const slug = decodeURI(params.query);
    const results = await getResults(slug);
    const posts = await getProjects();

    return (
        <Box mt={4}>

            <Container sx={{
                marginTop: '50px',
                maxWidth: 'lg'
            }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex'
                }}>
                    <Box sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '20px',
                        '@media (max-width: 768px)': {
                            flexDirection: 'column'
                        }
                    }}>
                        <Box sx={{
                            width: '50%',
                            '@media (max-width: 768px)': {
                                width: '100%'
                            }
                        }}>
                            <Image
                                src={posts[1].image}
                                alt={posts[1].name}
                                width="1000"
                                height='1000'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    marginTop: '10px',
                                }}
                            />
                            <Box sx={homepageContentTxt} style={{ marginTop: '30px' }}>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                                In the rapidly evolving landscape of today's technology-driven world, the field of machine learning has emerged as a transformative force, touching upon a myriad of industries including healthcare, finance, entertainment, and transportation.
                                <Box sx={readMore}>Read More</Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '50%',
                            '@media (max-width: 768px)': {
                                width: '100%'
                            }
                        }}>
                            <Image
                                src={posts[1].image}
                                alt={posts[1].name}
                                width="1000"
                                height='1000'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    marginTop: '10px',
                                }}
                            />
                            <Box sx={homepageContentTxt} style={{ marginTop: '30px' }}>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                                In the rapidly evolving landscape of today's technology-driven world, the field of machine learning has emerged as a transformative force, touching upon a myriad of industries including healthcare, finance, entertainment, and transportation.
                                <Box sx={readMore}>Read More</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex'
                }}>
                    <Box sx={rotateTxt}>Template</Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '20px',
                        width: '100%',
                        maxWidth: '1200px',
                        '@media (max-width: 768px)': {
                            flexDirection: 'column'
                        }
                    }}>
                        <Box sx={{
                            width: '50%',
                            '@media (max-width: 768px)': {
                                width: '100%'
                            }
                        }}>
                            <Image
                                src={posts[1].image}
                                alt={posts[1].name}
                                width="1000"
                                height='1000'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    marginTop: '10px',
                                }}
                            />
                            <Box sx={homepageContentTxt} style={{ marginTop: '30px' }}>
                                Text Template
                                <Box sx={readMore}>Read More</Box>
                            </Box>
                            <Image
                                src={posts[1].image}
                                alt={posts[1].name}
                                width="1000"
                                height='1000'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    marginTop: '10px',
                                }}
                            />
                            <Box sx={homepageContentTxt} style={{ marginTop: '30px' }}>
                                Text Template
                                <Box sx={readMore}>Read More</Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '50%',
                            paddingLeft: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            '@media (max-width: 768px)': {
                                width: '100%',
                                paddingLeft: '0px'
                            }
                        }}>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>01</Box>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>02</Box>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>03</Box>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>04</Box>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>05</Box>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>06</Box>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Box sx={leftContent}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                }}>
                    <Box sx={rotateTxt}>Template</Box>
                    <Box sx={{
                        width: 'calc(50% + 600px)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '20px',
                        '@media (max-width: 1200px)': {
                            width: '100%'
                        },
                        '@media (max-width: 768px)': {
                            flexDirection: 'column'
                        }
                    }}>
                        <Box display='flex'>
                            <Box width={1 / 2} overflow='hidden'>
                                <Image
                                    src={posts[1].image}
                                    alt={posts[1].name}
                                    width="1000"
                                    height='1000'
                                    style={{
                                        width: '200%',
                                        height: 'auto',
                                        marginTop: '10px',
                                        marginLeft: '-50%'
                                    }}
                                />
                            </Box>
                            <Box sx={leftContentTxt}>
                                Text Template
                                <Box sx={readMore}>Read More</Box>
                            </Box>
                        </Box>
                        <Box display='flex'>
                            <Box width={1 / 2} overflow='hidden'>
                                <Image
                                    src={posts[1].image}
                                    alt={posts[1].name}
                                    width="1000"
                                    height='1000'
                                    style={{
                                        width: '200%',
                                        height: 'auto',
                                        marginTop: '10px',
                                        marginLeft: '-50%'
                                    }}
                                />
                            </Box>
                            <Box sx={leftContentTxt}>
                                Text Template
                                <Box sx={readMore}>Read More</Box>
                            </Box>
                        </Box>
                        <Box display='flex'>
                            <Box width={1 / 2} overflow='hidden'>
                                <Image
                                    src={posts[1].image}
                                    alt={posts[1].name}
                                    width="1000"
                                    height='1000'
                                    style={{
                                        width: '200%',
                                        height: 'auto',
                                        marginTop: '10px',
                                        marginLeft: '-50%'
                                    }}
                                />
                            </Box>
                            <Box sx={leftContentTxt}>
                                Text Template
                                <Box sx={readMore}>Read More</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* <Container maxWidth="lg">
                <Box sx={main}>
                    <Box sx={leftColumn}>
                        <Box mb={2} sx={{ fontSize: "18px" }}>
                            Results
                        </Box>
                        <Box>
                            {results.map((item) => (
                                <Box key={item._id}>
                                    <Link href={`/${item.slug}`}>
                                        <Box sx={articleBlock}>
                                            <Box width="100%" sx={{ padding: "0 30px" }}>
                                                {item.category && (
                                                    <Box mt={2} sx={topCategory}>
                                                        {item.category}
                                                    </Box>
                                                )}
                                                <Box component="h4" sx={topName}>
                                                    {item.name}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box> */}
            {/*<Image src={project.image} alt={project.name} width={640} height={427} />*/}
            {/* </Container> */}
            <Script src="https://trk.tckingdminrdtrk.com/uniclick.js?attribution=lastpaid&cookiedomain=&cookieduration=90&defaultcampaignid=&regviewonce=false" />
            <Script src="/trk.js" />
        </Box>
    );
}
