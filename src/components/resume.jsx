import React from "react";
import { Document,Page,View,Text} from "@react-pdf/renderer";
import { Style } from "./resume-style";
let Resume = () => {

    return (
        <Document title="Resume preview">
            <Page wrap>
                <View wrap={false} style={Style.PaddingLeft} >
                    <Text style={[Style.textLight,Style.textCenter,Style.font50]}>Dummy Name</Text>
                    <Text style={[Style.textCenter,Style.font12]}>91 XXXXX XXXXX | abcdef@gmail.com</Text>
                    <Text style={[Style.textDark,Style.font20]}>Skills</Text>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>Programming Languages: </Text>
                        <Text style={[Style.font12]}> C, C++, Java, Python</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>Tech Stack: </Text>
                        <Text style={[Style.font12]}> Mern, Django, Ruby on rails</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>Tools: </Text>
                        <Text style={[Style.font12]}> Git, Jira</Text>
                    </View>
                    <Text style={[Style.textDark,Style.font20]}>Education</Text>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>Bachelor of Technology </Text>
                        <Text style={[Style.font12]}>| AIML | Acharya Nagarjuna University | 9.85 CGPA</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>Diploma </Text>
                        <Text style={[Style.font12]}>| SBTET | St Marys's Group Of Institutions | Web Designing | 80.25%</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>10th </Text>
                        <Text style={[Style.font12]}>| SSC | Sri Chaitanya Techo Sckool | 100%</Text>
                    </View>
                    <Text style={[Style.textDark,Style.font20]}>Expirence</Text>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Software Development Engineer </Text>
                        <Text style={[Style.font15]}>| Amazon | Banglore India </Text>
                        <Text style={[Style.font15]}>| 2020 May - 2021 March</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>hihihihihihihi</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>11111111111111</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Software Development Engineer </Text>
                        <Text style={[Style.font15]}>| Amazon | Banglore India </Text>
                        <Text style={[Style.font15]}>| 2020 May - 2021 March</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>hihihihihihihi</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>11111111111111</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Software Development Engineer </Text>
                        <Text style={[Style.font15]}>| Amazon | Banglore India </Text>
                        <Text style={[Style.font15]}>| 2020 May - 2021 March</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>hihihihihihihi</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>11111111111111</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                    </View>
                    <Text style={[Style.textDark,Style.font20]}>Projects</Text>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Project Name </Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>hihihihihihihi</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>11111111111111</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Project Namer </Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>hihihihihihihi</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>11111111111111</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Project Name</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>hihihihihihihi</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>11111111111111</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                        <View style={[Style.row]}>
                            <Text style={{ marginHorizontal: 8 }}>•</Text>
                            <Text>22222222222222</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Resume                               