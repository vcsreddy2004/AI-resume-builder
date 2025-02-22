import React from "react";
import { Document,Page,View,Text} from "@react-pdf/renderer";
import { Style } from "./resume-style";
const Resume = (props) => {
    let {resumeData} = props;
    return (
        <Document title={resumeData.resumeTitle}>
            <Page wrap>
                <View wrap={false} style={Style.PaddingLeft} >
                    <Text style={[Style.textLight,Style.textCenter,Style.font45]}>{resumeData.name}</Text>
                    <Text style={[Style.textCenter,Style.font12]}>91 {resumeData.phNumber} | {resumeData.email}</Text>
                    <Text style={[Style.textDark,Style.font20]}>Skills</Text>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>Programming Languages: </Text>
                        <Text style={[Style.font12]}>{resumeData.programingLanguages}</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>Tech Stack: </Text>
                        <Text style={[Style.font12]}>{resumeData.techStack}</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>Tools: </Text>
                        <Text style={[Style.font12]}>{resumeData.tools}</Text>
                    </View>
                    <Text style={[Style.textDark,Style.font20]}>Education</Text>
                    {resumeData.masterType && (
                        <View style={[Style.row]}>
                            <Text style={[Style.font12,Style.textDark]}>{resumeData.masterType} </Text>
                            <Text style={[Style.font12]}>| {resumeData.masterBranch} | {resumeData.masterCollageName} | {resumeData.masterResults} {resumeData.masterResultType}</Text>
                        </View>
                    )}
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>{resumeData.bachelorType    } </Text>
                        <Text style={[Style.font12]}>| {resumeData.bachelorBranch} | {resumeData.bachelorCollageName} | {resumeData.bachelorResult} {resumeData.bachelorResultType}</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>{resumeData.diplomaType} </Text>
                        <Text style={[Style.font12]}>{resumeData.diplomaCollageName} | {resumeData.diplomaBranch} | {resumeData.diplomaResult} {resumeData.diplomaResultType}</Text>
                    </View>
                    {/* <View style={[Style.row]}>
                        <Text style={[Style.font12,Style.textDark]}>10th </Text>
                        <Text style={[Style.font12]}>| SSC | Sri Chaitanya Techo Sckool | 100%</Text>
                    </View> */}
                    <Text style={[Style.textDark,Style.font20]}>Experience</Text>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Software Development Engineer </Text>
                        <Text style={[Style.font15]}>| Amazon | Banglore India </Text>
                        <Text style={[Style.font15]}>| 2020 May - 2021 March</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <Text>• hihihihihihihi</Text>
                        <Text>• 11111111111111</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Software Development Engineer </Text>
                        <Text style={[Style.font15]}>| Amazon | Banglore India </Text>
                        <Text style={[Style.font15]}>| 2020 May - 2021 March</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <Text>• hihihihihihihi</Text>
                        <Text>• 11111111111111</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Software Development Engineer </Text>
                        <Text style={[Style.font15]}>| Amazon | Banglore India </Text>
                        <Text style={[Style.font15]}>| 2020 May - 2021 March</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <Text>• hihihihihihihi</Text>
                        <Text>• 11111111111111</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                    </View>
                    <Text style={[Style.textDark,Style.font20]}>Projects</Text>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Project Name</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <Text>• hihihihihihihi</Text>
                        <Text>• 11111111111111</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Project Name</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <Text>• hihihihihihihi</Text>
                        <Text>• 11111111111111</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                    </View>
                    <View style={[Style.row]}>
                        <Text style={[Style.font15,Style.textDark]}>Project Name</Text>
                    </View>
                    <View style={[Style.collumn,Style.font12]}>
                        <Text>• hihihihihihihi</Text>
                        <Text>• 11111111111111</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                        <Text>• 22222222222222</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Resume                               