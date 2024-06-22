import { Stack } from "@mui/material";

interface HStackProps {
    children: React.ReactNode;
}

export function HStack({ children }: HStackProps) {
    return (
        <Stack direction='row'>
            {children}
        </Stack>
    );
}