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
                    {resumeData.experienceRole1 && (
                        <>
                            <Text style={[Style.textDark,Style.font20]}>Experience</Text>
                            <View style={[Style.row]}>
                                <Text style={[Style.font15,Style.textDark]}>{resumeData.experienceRole1} </Text>
                                <Text style={[Style.font15]}>| {resumeData.experienceCompany1} | {resumeData.experienceLocation1} </Text>
                                <Text style={[Style.font15]}>| {resumeData.experience1StartDate} - {resumeData.experience1StartDate} </Text>
                            </View>
                            <View style={[Style.collumn,Style.font12]}>
                                <Text>
                                    {resumeData.experience1Descreption}
                                </Text>
                            </View>
                        </>
                    )}
                    {resumeData.experienceRole2 && (
                        <>
                            <View style={[Style.row]}>
                                <Text style={[Style.font15,Style.textDark]}>{resumeData.experienceRole2} </Text>
                                <Text style={[Style.font15]}>| {resumeData.experienceCompany2} | {resumeData.experienceLocation2} </Text>
                                <Text style={[Style.font15]}>| {resumeData.experience2StartDate} - {resumeData.experience2StartDate} </Text>
                            </View>
                            <View style={[Style.collumn,Style.font12]}>
                                <Text>
                                    {resumeData.experience2Descreption}
                                </Text>
                            </View>
                        </>
                    )}
                    {resumeData.experienceRole3 && (
                        <>
                            <View style={[Style.row]}>
                                <Text style={[Style.font15,Style.textDark]}>{resumeData.experienceRole3} </Text>
                                <Text style={[Style.font15]}>| {resumeData.experienceCompany3} | {resumeData.experienceLocation3} </Text>
                                <Text style={[Style.font15]}>| {resumeData.experience3StartDate} - {resumeData.experience3StartDate} </Text>
                            </View>
                            <View style={[Style.collumn,Style.font12]}>
                                <Text>
                                    {resumeData.experience3Descreption}
                                </Text>
                            </View>
                        </>
                    )}
                    <Text style={[Style.textDark,Style.font20]}>Projects</Text>
                    {resumeData.project1Name && (
                        <>
                            <View style={[Style.row]}>
                                <Text style={[Style.font15,Style.textDark]}>{resumeData.project1Name}</Text>
                            </View>
                            <View style={[Style.collumn,Style.font12]}>
                                <Text>{resumeData.project1Descreption}</Text>
                            </View>
                        </>
                    )}
                    {resumeData.project2Name && (
                        <>
                            <View style={[Style.row]}>
                                <Text style={[Style.font15,Style.textDark]}>{resumeData.project2Name}</Text>
                            </View>
                            <View style={[Style.collumn,Style.font12]}>
                                <Text>{resumeData.project2Descreption}</Text>
                            </View>
                        </>
                    )}
                    {resumeData.project3Name && (
                        <>
                            <View style={[Style.row]}>
                                <Text style={[Style.font15,Style.textDark]}>{resumeData.project3Name}</Text>
                            </View>
                            <View style={[Style.collumn,Style.font12]}>
                                <Text>{resumeData.project3Descreption}</Text>
                            </View>
                        </>
                    )}
                </View>
            </Page>
        </Document>
    )
}

export default Resume                               