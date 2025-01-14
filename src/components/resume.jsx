import React from "react";
import { Document,Page,View,Text,Line,Svg } from "@react-pdf/renderer";
import { Style } from "./resume-style";
let Resume = (prop) => {

    return (
        <Document>
            <Page wrap>
                <View wrap={false} style={Style.PaddingLeft} >
                    <Text style={[Style.textLight,Style.textCenter,Style.font40]}>Dummy Name</Text>
                    <Text style={[Style.textCenter,Style.font12]}>91 XXXXX XXXXX | abcdef@gmail.com</Text>
                    <Text style={[Style.textDark,Style.font30]}>Skills</Text>
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
                    {/* <Svg>
                        <Line x1="0" y1="10" x2="600" y2="10" strokeWidth={1} stroke="rgb(0,0,0)"></Line>
                    </Svg> */}
                </View>
            </Page>
        </Document>
    )
}

export default Resume                               