const pty = require('node-pty');



export const create_deposit_data = () => {
    
    const shell = pty.spawn('bash', [], {
        name: 'xterm-color',
        cols: 80,
        rows: 30,
        cwd: process.cwd(), // Set the current working directory
        env: process.env, // Use the current environment variables
    });

    const depositScript = '/srv/onboarding/deposit';

    shell.onData((data: any) => {
        console.log(data); // This will print the output to the console
    
        if (data.includes('Please choose your language')) {
            shell.write('3\r'); 
        }
    
        if (data.includes('Please enter your mnemonic separated by spaces')) { 
            shell.write(`${process.env.MNEMONIC}\r`); 
        }

        if (data.includes('Enter the index (key number) you wish to start generating more keys from.')) { 
            shell.write(`${process.env.COUNT}\r`); 
        }

        if (data.includes('Please repeat the index to confirm:')) { 
            shell.write(`${process.env.COUNT}\r`); 
        }

        if (data.includes('Please choose the (mainnet or testnet) network/chain name')) { 
            shell.write(`${process.env.NETWORK}\r`); 
        }

        if (data.includes('Create a password that secures your validator keystore(s).')) { 
            shell.write(`${process.env.PASSWORD}\r`); 
        }

        if (data.includes('Repeat your keystore password for confirmation:')) { 
             shell.write(`${process.env.PASSWORD}\r`); 
        }

        if (data.includes('Press any key.')) { 
            shell.write(`\r`); 
        }
    });
}