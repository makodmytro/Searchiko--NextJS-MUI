import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Box, Grid } from "../../src/app/lib/mui";
import {
    getProjects,
    getTopArticles,
    getRelatedArticles
} from "../../sanity/schemas/sanity-utils";

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
    color: '#fff',
    lineHeight: '34px',
    marginTop: '30px',
    ml: 3,
    '@media (max-width: 991px)': {
        fontSize: '20px',
        marginTop: '20px',
        ml: 2
    }
}

const subMainTxt = {
    fontSize: '18px',
    color: '#fff',
    lineHeight: '26px',
    marginTop: '20px',
    marginInline: '0px',
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
}

export default async function Blog() {
    const posts = await getProjects();
    const topArticles = await getTopArticles();
    const relatedArticles = await getRelatedArticles();

    return (
        <Box>
            <Box sx={{ backgroundColor: '#0c173a' }} >
                <Container maxWidth='lg'>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '20px',
                        '@media (max-width: 768px)': {
                            flexDirection: 'column',
                        }
                    }}>
                        <Box sx={{
                            width: '50%',
                            position: 'relative',
                            '@media (max-width: 768px)': {
                                width: '100%'
                            }
                        }}>
                            <Box
                                component="h4"
                                sx={{
                                    fontSize: '50px',
                                    color: 'white',
                                    '@media (max-width: 991px)': {
                                        fontSize: '35px'
                                    }
                                }}
                            >
                                {posts[0].name}
                            </Box>
                            <Image
                                src={posts[0].image}
                                alt={posts[0].name}
                                width="1000"
                                height='1000'
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                            <Box sx={{
                                display: 'flex',
                                paddingTop: '50px',
                                '@media (max-width: 768px)': {
                                    paddingTop: '20px'
                                }
                            }}>
                                <Box component="h4" sx={numTxt}>01</Box>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '35%',
                            '@media (max-width: 768px)': {
                                width: '100%'
                            }
                        }}>
                            <Box sx={{
                                display: 'flex',
                                paddingTop: '50px',
                                '@media (max-width: 768px)': {
                                    paddingTop: '20px'
                                }
                            }}>
                                <Box component="h4" sx={numTxt}>02</Box>
                                <Box component="h4" sx={mainTxt}>Text Template</Box>
                            </Box>
                            <Image
                                src={posts[0].image}
                                alt={posts[0].name}
                                width="1000"
                                height='1000'
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                            <Box sx={subMainTxt}>Text Template</Box>
                            <Box sx={readMore}>Read More</Box>
                            <Image
                                src={posts[0].image}
                                alt={posts[0].name}
                                width="1000"
                                height='1000'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    marginTop: '10px'
                                }}
                            />
                            <Box sx={subMainTxt}>Text Template</Box>
                            <Box sx={readMore}>Read More</Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

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

            <Box sx={{
                position: 'relative',
                marginTop: '100px'
            }}>
                <Container sx={{
                    display: 'flex',
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '25px',
                        '@media (max-width: 768px)': {
                            flexDirection: 'column'
                        }
                    }}>
                        <Box sx={{
                            overflow: 'hidden',
                            width: '100%',
                            '@media (max-width: 768px)': {
                                width: '75%',
                                marginLeft: '25%'
                            }
                        }}>
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
                        <Box sx={{
                            overflow: 'hidden',
                            width: '100%',
                            '@media (max-width: 768px)': {
                                width: '75%',
                                marginLeft: '25%'
                            }
                        }}>
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
                        <Box sx={{
                            overflow: 'hidden',
                            width: '100%',
                            '@media (max-width: 768px)': {
                                width: '75%',
                                marginLeft: '25%'
                            }
                        }}>
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
                        <Box sx={{
                            overflow: 'hidden',
                            width: '100%',
                            '@media (max-width: 768px)': {
                                width: '75%',
                                marginLeft: '25%'
                            }
                        }}>
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
                        <Box sx={{
                            overflow: 'hidden',
                            width: '100%',
                            '@media (max-width: 768px)': {
                                width: '75%',
                                marginLeft: '25%'
                            }
                        }}>
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
                    </Box>
                    <Box sx={rotateTxt} style={{ transform: 'rotate(90deg)' }}>Template</Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '1200px'
                }} display='flex'>
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
                                <Box component="h4" sx={mainTxt} style={{ color: '#333' }}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>02</Box>
                                <Box component="h4" sx={mainTxt} style={{ color: '#333' }}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>03</Box>
                                <Box component="h4" sx={mainTxt} style={{ color: '#333' }}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>04</Box>
                                <Box component="h4" sx={mainTxt} style={{ color: '#333' }}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>05</Box>
                                <Box component="h4" sx={mainTxt} style={{ color: '#333' }}>Text Template</Box>
                            </Box>
                            <Box display='flex' style={{ boxShadow: '0 0 14px 0 rgba(211, 209, 209, 0.5)', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                                <Box component="h4" sx={numTxt} style={{ marginTop: '10px', opacity: '0.3' }}>06</Box>
                                <Box component="h4" sx={mainTxt} style={{ color: '#333' }}>Text Template</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Box
                sx={{
                    backgroundColor: '#d4e2fc',
                    marginTop: '50px',
                    paddingInline: '50px',
                    paddingTop: '30px',
                    paddingBottom: '30px',
                    '@media (max-width: 1200px)': {
                        paddingLeft: '40px',
                        paddingRight: '0px  '
                    }
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        width: 'calc(50% + 600px)',
                        '@media (max-width: 1200px)': {
                            width: '100%'
                        }
                    }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '20px',
                        '@media (max-width: 768px)': {
                            flexDirection: 'column'
                        }
                    }}>
                        <Box>
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
                        </Box>
                        <Box style={{ marginTop: '30px' }}>
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
                        </Box>
                        <Box>
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
                        </Box>
                        <Box style={{ marginTop: '30px' }}>
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
                        </Box>
                        <Box>
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
                        </Box>
                    </Box>
                    <Box sx={rotateTxt} style={{ transform: 'rotate(90deg)' }}>Template</Box>
                </Box>
            </Box>

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
                        {posts.map((post) => (
                            <Box key={post._id}>
                                <Link href={`/${post.slug}`}>
                                    <Box sx={articleBlock}>
                                        <Box
                                            sx={{
                                                width: "40%",
                                                height: "179px",
                                                position: "relative"
                                            }}
                                        >
                                            {post.image && (
                                                <Image
                                                    src={post.image}
                                                    alt={post.name}
                                                    fill={true}
                                                    style={{
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            )}
                                        </Box>
                                        <Box width="60%" sx={{ padding: "0 30px" }}>
                                            {post.category && (
                                                <Box sx={topCategory}>{post.category}</Box>
                                            )}
                                            <Box mb={1} component="h4" sx={topName}>
                                                {post.name}
                                            </Box>
                                            <Box sx={shortText}>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={rightColumn}>
                        <Box mb={4} sx={{ fontSize: "32px" }}>
                            <span style={{ fontWeight: "bold" }}>Top</span> Articles
                        </Box>
                        <Box>
                            {topArticles.map((item) => (
                                <Box key={item._id}>
                                    <Link href={`/${item.slug}`}>
                                        <Box sx={articleBlock}>
                                            <Box
                                                sx={{
                                                    width: "40%",
                                                    height: "128px",
                                                    position: "relative"
                                                }}
                                            >
                                                {item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill={true}
                                                        style={{
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                )}
                                            </Box>
                                            <Box width="60%" sx={{ padding: "0 30px" }}>
                                                {item.category && (
                                                    <Box sx={topCategory}>{item.category}</Box>
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
                </Box>
                <Box mb={4}>
                    <Box mb={4} sx={{ fontSize: "32px" }}>
                        <span style={{ fontWeight: "bold" }}>Related</span> Articles
                    </Box>
                    <Box>
                        <Grid container spacing={4}>
                            {relatedArticles.map((item) => (
                                <Grid key={item._id} item xs={12} md={4}>
                                    <Link href={`/${item.slug}`}>
                                        <Box sx={articleBlock}>
                                            <Box
                                                sx={{
                                                    width: "40%",
                                                    height: "128px",
                                                    position: "relative"
                                                }}
                                            >
                                                {item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill={true}
                                                        style={{
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                )}
                                            </Box>
                                            <Box width="60%" sx={{ padding: "0 30px" }}>
                                                {item.category && (
                                                    <Box sx={topCategory}>{item.category}</Box>
                                                )}
                                                <Box component="h4" sx={topName}>
                                                    {item.name}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Container> */}
        </Box>
    );
}
