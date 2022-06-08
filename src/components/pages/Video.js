import React, { useRef, useEffect,useState } from 'react';
const { IvsClient, GetStreamCommand, CreateChannelCommand, IvsClientConfig } = require("@aws-sdk/client-ivs"); // CommonJS import

const Video = () => {
    const AccessKeyId = 'AKIARMIWUTPVLGVF73GP'
    const SecretAcessKey = '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'

    const config = {
        "region" : "us-east-1",
        "credentials" : {
            "AccessKeyId": AccessKeyId,
            "SecretAccessKey" : SecretAcessKey
        },
    }


    useEffect( () => {
        //Runs on every render
        const getStream = async () => {
            let input = {
                "channelArn" : "arn:aws:ivs:us-east-1:095073639402:channel/e8t8Pd8pE1aI"
            }
            const client = new IvsClient(config);
            const command = new GetStreamCommand(input);
            const response = await client.send(command);
            console.log(response)
        }
        getStream()
    });

    const handleCreateChannel = async () => {
        try {
            let input = {
                "name" : "mohssine-channel",
                "latencyMode" : "LOW",
                "type" : "BASIC",
                "authorized" : false
            }
            const client = new IvsClient(config);
            const command = new CreateChannelCommand(input);
            const response = await client.send(command);
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="App">
            {/*<ReactHlsPlayer
            src="https://5bc2f0e7b770.us-east-1.playback.live-video.net/api/video/v1/us-east-1.095073639402.channel.e8t8Pd8pE1aI.m3u8"
            autoPlay={false}
            controls={true}
            width="720px"
            height="400px"
        />*/}
            <br />
            <br />
            <button onClick={handleCreateChannel} >
                Create channel
            </button>

        </div>
    )
};

export default Video;