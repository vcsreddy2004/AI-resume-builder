import React from "react";
import { Document,Page,View,Text,Line } from "@react-pdf/renderer";
import { Style } from "./resume-style";
let Resume = (prop) => {

    return (
        <Document>
            <Page wrap>
                <View wrap={false} >
                    <Text style={[Style.textBold,Style.textCenter,Style.font40]}>Dummy Name</Text>
                    <View style={[Style.rowr]}>
                        <Text style={[Style.textCenter,Style.font12]}>91 XXXXX XXXXX abcdef@gmail.com</Text>
                    </View>
                    <Line></Line>
                </View>
            </Page>
        </Document>
    )
}

export default Resume                               